import torch
import torch.nn as nn
import torchvision.models as models

def get_model(num_classes, dropout_rate=0.3):
    """
    Create a model with dropout for regularization.

    Args:
        num_classes: Number of output classes
        dropout_rate: Dropout probability (0 to 1)

    Returns:
        PyTorch model
    """
    # Load pre-trained model
    model = models.efficientnet_b0(pretrained=True)

    # Freeze early layers to prevent overfitting
    # This helps the model focus on learning high-level features
    for param in list(model.parameters())[:-10]:  # Freeze all but the last few layers
        param.requires_grad = False

    # Replace classifier with custom one that includes dropout
    in_features = model.classifier[1].in_features
    model.classifier = nn.Sequential(
        nn.Dropout(p=dropout_rate),
        nn.Linear(in_features, 256),
        nn.ReLU(),
        nn.Dropout(p=dropout_rate),
        nn.Linear(256, num_classes)
    )

    return model
