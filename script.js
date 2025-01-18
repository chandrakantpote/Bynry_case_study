document.addEventListener('DOMContentLoaded', () => {
    const profiles = [
        { id: 1, name: 'John Doe', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWxM-suv1FS6po0iNoJEgsYV43T0WV7YTISkXQV2r_h4d4kl4_nPTWYSc&s', description: 'Software Engineer', address: '123 Main St, City' },
        { id: 2, name: 'Jane Smith', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVwK-e4c9Y0WIevWBIJoF5F25qxxVelt6smg&s', description: 'Data Scientist', address: '456 Elm St, City' },
        // Add more profiles as needed
    ];

    const profileContainer = document.getElementById('profile-container');
    const mapContainer = document.getElementById('map-container');
    const map = new google.maps.Map(mapContainer, {
        center: { lat: 40.7128, lng: -74.0060 }, // Default center
        zoom: 10
    });

    profiles.forEach(profile => {
        const profileCard = document.createElement('div');
        profileCard.classList.add('profile-card');
        profileCard.innerHTML = `
            <img src="${profile.photo}" alt="${profile.name}" class="profile-photo">
            <h3>${profile.name}</h3>
            <p>${profile.description}</p>
            <button onclick="showSummary(${profile.id})">Summary</button>
        `;
        profileContainer.appendChild(profileCard);
    });

    function showSummary(profileId) {
        const profile = profiles.find(p => p.id === profileId);
        const marker = new google.maps.Marker({
            position: { lat: 40.7128, lng: -74.0060 }, // Replace with actual coordinates
            map: map
        });
        map.setCenter(marker.getPosition());
    }
});
