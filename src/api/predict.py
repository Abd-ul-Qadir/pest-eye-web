import torch
import torchvision.transforms as transforms
import torch.nn.functional as F
from PIL import Image
from model import get_model

# ✅ Hardcoded class names
CLASS_NAMES = [
    'Locustoidea', 'Miridae', 'Thrips', 'army worm', 'brown plant hopper',
    'flea beetle', 'grasshopper', 'grubs', 'rice Stemfly', 'rice gall midge',
    'rice leaf roller', 'rice leafhopper', 'rice water weevil',
    'small brown plant hopper', 'wheat sawfly', 'white backed plant hopper',
    'yellow rice borer'
]

def predict_image(image_path, confidence_threshold=0.7, entropy_threshold=1.1, temperature=1.5):
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    num_classes = len(CLASS_NAMES)

    # Load the model
    model = get_model(num_classes).to(device)
    model.load_state_dict(torch.load('models/best_model.pth', map_location=device))
    model.eval()

    # Image transform
    transform = transforms.Compose([
        transforms.Resize((224, 224)),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.5, 0.5, 0.5], std=[0.5, 0.5, 0.5])
    ])

    image = Image.open(image_path).convert("RGB")
    image_tensor = transform(image).unsqueeze(0).to(device)

    with torch.no_grad():
        output = model(image_tensor)
        scaled_output = output / temperature
        probabilities = F.softmax(scaled_output, dim=1)

        entropy = -torch.sum(probabilities * torch.log(probabilities + 1e-10), dim=1).item()
        max_prob, predicted_idx = probabilities.max(1)
        confidence = max_prob.item()

        if confidence < confidence_threshold or entropy > entropy_threshold:
            return "Unknown"
        else:
            return CLASS_NAMES[predicted_idx.item()]
