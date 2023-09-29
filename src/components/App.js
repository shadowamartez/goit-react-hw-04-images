import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { CustomLoader } from './CustomLoader';
import Button from './Button';
import Modal from './Modal';
import { GlobalStyles } from './GlobalStyles';

const API_KEY = '38476284-331f716b1abb5b5177c821f88';

export const App = () => {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleSearch = async (searchQuery) => {
        setQuery(searchQuery);
        setPage(1);
        setImages([]);
    };

    const handleLoadMore = () => {
        setPage(page + 1);
    };

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedImage('');
        setModalOpen(false);
    };

    useEffect(() => {
        if (!query) return;

        const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
            `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
            );
            const newImages = response.data.hits;
            setImages((prevImages) => [...prevImages, ...newImages]);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
        };

        fetchData();
    }, [query, page]);

    return (
        <div className="App">
        <Searchbar onSubmit={handleSearch} />
        <ImageGallery images={images} onImageClick={handleImageClick} />
        {loading && <CustomLoader />}
        {images.length > 0 && <Button onClick={handleLoadMore} disabled={loading} />}
        <Modal isOpen={modalOpen} onClose={handleCloseModal} imageSrc={selectedImage} />
        <GlobalStyles/>
        </div>
    );
};



