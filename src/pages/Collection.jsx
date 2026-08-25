import React, { useState, useMemo } from 'react';
import PageTitle from '../components/pagetitle/PageTitle';

import { Accordion } from 'react-bootstrap-accordion';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

import data from '../assets/fake-data/data-collection';

function Collection(props) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedCrop, setSelectedCrop] = useState('');

    const categories = ['Aphids', 'Armyworm', 'Cutworm', 'Thrips', 'White Fly'];
    const crops = ['Wheat', 'Rice', 'Cotton', 'Maize', 'Vegetables', 'Fruits'];

    const handleCategoryClick = (cat) => {
        setSelectedCategory(prev => prev === cat ? '' : cat);
    };

    const handleCropClick = (crop) => {
        setSelectedCrop(prev => prev === crop ? '' : crop);
    };

    const handleClearAll = (e) => {
        if (e) e.preventDefault();
        setSearchQuery('');
        setSelectedCategory('');
        setSelectedCrop('');
    };

    const filteredData = useMemo(() => {
        return data.filter(item => {
            if (searchQuery.trim() !== '') {
                const q = searchQuery.toLowerCase();
                if (!item.title.toLowerCase().includes(q)) return false;
            }
            if (selectedCategory !== '') {
                if (!item.title.toLowerCase().includes(selectedCategory.toLowerCase())) return false;
            }
            if (selectedCrop !== '') {
                // Approximate crop matching
                if (selectedCrop === 'Wheat' && !['Alphid', 'Wheat Alphid', 'Wheat Midge', 'Sawfly', 'Cutworm', 'Armyworm'].some(c => item.title.includes(c))) return false;
                if (selectedCrop === 'Rice' && !['Rice Weevil', 'Leaf Folder', 'GallMidge', 'Hispa', 'Thrips'].some(c => item.title.includes(c))) return false;
            }
            return true;
        });
    }, [searchQuery, selectedCategory, selectedCrop]);

    return (
        <div className='page-collection'>
            <PageTitle title='Pest Collection' />

            <section className="tf-collection-inner">
                <div className="tf-container">
                    <div className="row">
                        
                        {/* Sidebar Filters */}
                        <div className="col-lg-3 col-md-4">
                            <div className="sidebar sidebar-collection">

                                {/* Pest Category */}
                                <div className="widget widget-clothing widget-accordion">
                                    <Accordion title='PEST CATEGORY' className='widget-title active'>
                                        <div className="widget-content toggle-content">
                                            <form action="#" className="form-checkbox" onSubmit={(e) => e.preventDefault()}>
                                                {categories.map((cat, idx) => (
                                                    <label key={idx} className="checkbox-item" onClick={() => handleCategoryClick(cat)}>
                                                        <span className="custom-checkbox">
                                                            <input type="checkbox" checked={selectedCategory === cat} readOnly />
                                                            <span className="btn-checkbox"></span>
                                                        </span>
                                                        <span>{cat}</span>
                                                    </label>
                                                ))}
                                            </form>
                                        </div>
                                    </Accordion>
                                </div>

                                {/* Crop Type */}
                                <div className="widget widget-eyes widget-accordion">
                                    <Accordion title='CROP TYPE' className='widget-title'>
                                        <div className="widget-content">
                                            <form action="#" className="form-checkbox" onSubmit={(e) => e.preventDefault()}>
                                                {crops.map((crop, idx) => (
                                                    <label key={idx} className="checkbox-item" onClick={() => handleCropClick(crop)}>
                                                        <span className="custom-checkbox">
                                                            <input type="checkbox" checked={selectedCrop === crop} readOnly />
                                                            <span className="btn-checkbox"></span>
                                                        </span>
                                                        <span>{crop}</span>
                                                    </label>
                                                ))}
                                            </form>
                                        </div>
                                    </Accordion>
                                </div>

                                {/* Infestation Level */}
                                <div className="widget widget-skin widget-accordion">
                                    <Accordion title='INFESTATION LEVEL' className='widget-title'>
                                        <div className="widget-content">
                                            <form action="#" className="form-checkbox" onSubmit={(e) => e.preventDefault()}>
                                                {['Low', 'Moderate', 'High', 'Severe'].map((lvl, idx) => (
                                                    <label key={idx} className="checkbox-item">
                                                        <span className="custom-checkbox"><input type="checkbox" /><span className="btn-checkbox"></span></span>
                                                        <span>{lvl}</span>
                                                    </label>
                                                ))}
                                            </form>
                                        </div>
                                    </Accordion>
                                </div>

                                {/* Season */}
                                <div className="widget widget-background widget-accordion">
                                    <Accordion title='SEASON' className='widget-title'>
                                        <div className="widget-content">
                                            <form action="#" className="form-checkbox" onSubmit={(e) => e.preventDefault()}>
                                                {['Spring', 'Summer', 'Monsoon', 'Autumn', 'Winter'].map((s, idx) => (
                                                    <label key={idx} className="checkbox-item">
                                                        <span className="custom-checkbox"><input type="checkbox" /><span className="btn-checkbox"></span></span>
                                                        <span>{s}</span>
                                                    </label>
                                                ))}
                                            </form>
                                        </div>
                                    </Accordion>
                                </div>

                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="col-lg-9 col-md-8">
                            <div className="top-option d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
                                <h2 className="heading mb-0">All Pests ({filteredData.length})</h2>
                                <div className="widget widget-search">
                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <input 
                                            type="text" 
                                            placeholder="Search Pest..." 
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                        <button type="submit" className="btn-search" style={{ background: 'transparent', border: 'none' }}>
                                            <i className="icon-fl-search-filled"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Active Filter Chips */}
                            {(selectedCategory || selectedCrop || searchQuery) && (
                                <ul className="filter-content mb-4 d-flex flex-wrap gap-2">
                                    {selectedCrop && <li><Link to="#" onClick={() => setSelectedCrop('')}>{selectedCrop} <i className="fal fa-times"></i></Link></li>}
                                    {selectedCategory && <li><Link to="#" onClick={() => setSelectedCategory('')}>{selectedCategory} <i className="fal fa-times"></i></Link></li>}
                                    {searchQuery && <li><Link to="#" onClick={() => setSearchQuery('')}>"{searchQuery}" <i className="fal fa-times"></i></Link></li>}
                                    <li><Link to="#" onClick={handleClearAll} style={{ color: '#21e786' }}>Clear All</Link></li>
                                </ul>
                            )}

                            {/* Pest Cards Grid */}
                            <div className="row g-4">
                                {filteredData.length > 0 ? (
                                    filteredData.map(idx => (
                                        <div key={idx.id} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="tf-product">
                                                <div className="image">
                                                    <img src={idx.img} alt={idx.title} loading="lazy" />
                                                </div>
                                                <h6 className="name">
                                                    <Link to={`/item-details?pest=${encodeURIComponent(idx.title)}`}>
                                                        {idx.title}
                                                    </Link>
                                                </h6>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-12 text-center py-5">
                                        <p style={{ color: '#94a3b8', fontSize: '18px' }}>No pests match your filter criteria.</p>
                                        <button onClick={handleClearAll} className="tf-button style-2">Reset Filters</button>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Collection;
