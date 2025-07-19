const moviesData = [
    {
        id: 1,
        title: "Beyond Earth",
        year: "2023",
        rating: "8.5",
        genre: "Sci-Fi",
        description: "A thrilling journey beyond our planet exploring the mysteries of space and alien civilizations.",
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop",
        type: "movie"
    },
    {
        id: 2,
        title: "Bottom Gear",
        year: "2024",
        rating: "7.8",
        genre: "Action",
        description: "High-octane racing action with stunning visuals and heart-pounding sequences.",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop",
        type: "movie"
    },
    {
        id: 3,
        title: "Undiscovered Cities",
        year: "2023",
        rating: "9.1",
        genre: "Documentary",
        description: "Explore hidden civilizations and ancient cities lost to time.",
        image: "https://images.unsplash.com/photo-1518588271327-237b7f7e6d49?w=400&h=300&fit=crop",
        type: "series"
    },
    {
        id: 4,
        title: "The Great Lands",
        year: "2024",
        rating: "8.7",
        genre: "Adventure",
        description: "Epic adventure through vast landscapes and untamed wilderness.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        type: "series"
    },
    {
        id: 5,
        title: "The Diary",
        year: "2023",
        rating: "8.2",
        genre: "Drama",
        description: "A compelling story of personal discovery and emotional growth.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        type: "movie"
    },
    {
        id: 6,
        title: "Earth's Unleashed",
        year: "2024",
        rating: "8.9",
        genre: "Action",
        description: "Nature's fury unleashed in this intense survival thriller.",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop",
        type: "movie"
    },
    {
        id: 7,
        title: "No Limit Beyond",
        year: "2023",
        rating: "7.9",
        genre: "Romance",
        description: "A heartwarming tale of love that transcends all boundaries.",
        image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=300&fit=crop",
        type: "movie"
    },
    {
        id: 8,
        title: "During the Hunt",
        year: "2024",
        rating: "8.4",
        genre: "Thriller",
        description: "Intense psychological thriller that keeps you on the edge of your seat.",
        image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=400&h=300&fit=crop",
        type: "series"
    },
    {
        id: 9,
        title: "Advanced The Series",
        year: "2024",
        rating: "8.6",
        genre: "Sci-Fi",
        description: "Cutting-edge technology meets human drama in this futuristic series.",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop",
        type: "series"
    },
    {
        id: 10,
        title: "Some Avenue II",
        year: "2023",
        rating: "7.7",
        genre: "Drama",
        description: "The highly anticipated sequel to the beloved drama series.",
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=300&fit=crop",
        type: "series"
    },
    {
        id: 11,
        title: "Below Echo",
        year: "2024",
        rating: "8.8",
        genre: "Mystery",
        description: "Dive deep into the mysteries that lie beneath the surface.",
        image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=300&fit=crop",
        type: "movie"
    }
];

// DOM elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const trendingGrid = document.getElementById('trendingGrid');
const recommendedGrid = document.getElementById('recommendedGrid');
const searchResults = document.getElementById('searchResults');
const searchGrid = document.getElementById('searchGrid');
const modal = document.getElementById('movieModal');
const closeModal = document.getElementById('closeModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadTrendingContent();
    loadRecommendedContent();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    closeModal.addEventListener('click', closeMovieModal);
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeMovieModal();
        }
    });
    
    // Navigation icons
    const navIcons = document.querySelectorAll('.nav-icon');
    navIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            navIcons.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Load trending content
function loadTrendingContent() {
    const trendingItems = moviesData.slice(0, 6);
    trendingGrid.innerHTML = '';
    
    trendingItems.forEach(item => {
        const contentElement = createContentElement(item);
        trendingGrid.appendChild(contentElement);
    });
}

// Load recommended content
function loadRecommendedContent() {
    const recommendedItems = moviesData.slice(3, 11);
    recommendedGrid.innerHTML = '';
    
    recommendedItems.forEach(item => {
        const contentElement = createContentElement(item);
        recommendedGrid.appendChild(contentElement);
    });
}

// Create content element
function createContentElement(item) {
    const contentDiv = document.createElement('div');
    contentDiv.className = 'content-item';
    contentDiv.style.backgroundImage = `url(${item.image})`;
    
    contentDiv.innerHTML = `
        <div class="play-icon">▶️</div>
        <div class="content-info">
            <h3 class="content-title">${item.title}</h3>
            <div class="content-meta">
                <span class="rating">${item.rating}</span>
                <span class="year">${item.year}</span>
                <span class="genre">${item.genre}</span>
            </div>
        </div>
    `;
    
    contentDiv.addEventListener('click', () => openMovieModal(item));
    
    return contentDiv;
}

// Perform search
function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        hideSearchResults();
        return;
    }
    
    const searchMatches = moviesData.filter(item => 
        item.title.toLowerCase().includes(searchTerm) ||
        item.genre.toLowerCase().includes(searchTerm) ||
        item.year.includes(searchTerm)
    );
    
    displaySearchResults(searchMatches);
}

// Display search results
function displaySearchResults(results) {
    searchResults.style.display = 'block';
    searchGrid.innerHTML = '';
    
    if (results.length === 0) {
        searchGrid.innerHTML = '<p style="color: #ccc; grid-column: 1/-1; text-align: center; padding: 40px;">No results found. Try a different search term.</p>';
        return;
    }
    
    // Set grid layout for search results
    searchGrid.style.display = 'grid';
    searchGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
    searchGrid.style.gap = '20px';
    
    results.forEach(item => {
        const contentElement = createContentElement(item);
        contentElement.style.height = '200px';
        searchGrid.appendChild(contentElement);
    });
    
    // Scroll to search results
    searchResults.scrollIntoView({ behavior: 'smooth' });
}

// Hide search results
function hideSearchResults() {
    searchResults.style.display = 'none';
    searchInput.value = '';
}

// Open movie modal
function openMovieModal(item) {
    modalImage.src = item.image;
    modalTitle.textContent = item.title;
    modalDescription.textContent = item.description;
    modal.style.display = 'block';
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Close movie modal
function closeMovieModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects and animations
    const contentItems = document.querySelectorAll('.content-item');
    
    contentItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add loading animation
    const grids = [trendingGrid, recommendedGrid];
    grids.forEach(grid => {
        if (grid) {
            grid.style.opacity = '0';
            grid.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                grid.style.opacity = '1';
            }, 100);
        }
    });
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Escape key to close modal
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeMovieModal();
    }
    
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
});

// Add search suggestions (optional enhancement)
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.trim().toLowerCase();
    
    if (searchTerm.length > 2) {
        // This could be expanded to show search suggestions
        console.log('Searching for:', searchTerm);
    }
});

// Simulate loading more content
function loadMoreContent() {
    // This function could be used to load more content dynamically
    console.log('Loading more content...');
}

// Add play button functionality
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('play-btn')) {
        alert('Playing movie... (This would connect to your video player)');
    }
    
    if (e.target.classList.contains('add-to-list')) {
        alert('Added to your list!');
        e.target.textContent = '✓ Added';
        e.target.style.backgroundColor = '#4CAF50';
    }
});

// Add smooth scrolling for navigation
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Export functions for potential use in other files
window.entertainmentApp = {
    loadTrendingContent,
    loadRecommendedContent,
    performSearch,
    openMovieModal,
    closeMovieModal
};