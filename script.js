function initMapSwalayan() {
  if (document.getElementById('map')) {
    // Inisialisasi peta dengan view yang lebih baik
    var map = L.map('map', {
      zoomControl: false,
      preferCanvas: true
    }).setView([-9.467, 124.482], 14);

    // Tambahkan zoom control di pojok kanan atas
    L.control.zoom({
      position: 'topright'
    }).addTo(map);

    // Tile layer OSM dengan style yang lebih baik
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
      detectRetina: true
    }).addTo(map);

    // Ikon marker yang lebih modern
    function createCustomIcon(iconColor) {
      return L.divIcon({
        html: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="${iconColor}" stroke-width="2" fill="white" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
        className: 'custom-marker',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
      });
    }

    // Warna ikon yang lebih menarik
    var blueIcon = createCustomIcon('#1976d2');
    var redIcon = createCustomIcon('#dc3545');
    var greenIcon = createCustomIcon('#28a745');

    // Data lokasi dengan gambar contoh (ganti dengan URL gambar Anda)
    var dataToko = [
      // Indomart (biru)
      { 
        name: "Indomart Pasar Lama", 
        lat: -9.446240387172868, 
        lon: 124.47897299636219, 
        icon: blueIcon, 
        category: "Indomart",
        image: "aset/Indomart_Pasar_Lama.jpg",
        address: "Jl. Pasar Lama No. 123, Kefamenanu",
        hours: "08:00 - 21:00",
        phone: "(0388) 1234567"
      },
      { 
        name: "Indomart Terminal",
        lat: -9.467001512730855, 
        lon: 124.48304626646598, 
        icon: blueIcon, 
        category: "Indomart",
        image: "aset/indo_terminal.png",
        address: "Jl. Terminal No. 45, Kefamenanu",
        hours: "07:30 - 22:00",
        phone: "(0388) 2345678"
      },
      { 
        name: "Indomart Nasleu", 
        lat: -9.458461645403911, 
        lon: 124.48284831722135, 
        icon: blueIcon, 
        category: "Indomart",
        image: "aset/indo_nasleu.jpg",
        address: "Jl. Nasleu No. 45, Kefamenanu",
        hours: "07:30 - 22:00",
        phone: "(0388) 2345678"
      },
      { 
        name: "Indomart KM 7", 
        lat: -9.4991009497036, 
        lon: 124.49254278732094,
        icon: blueIcon, 
        category: "Indomart",
        image: "aset/indo_km7.jpeg",
        address: "Jl. KM 7 No. 45, Kefamenanu",
        hours: "08:00 - 22:00",
        phone: "(0388) 3456789"
      },
      // Tambahkan data lainnya dengan format yang sama

      // Alfamart (merah)
      { 
        name: "Alfamart Maubeli", 
        lat: -9.485053840839477, 
        lon: 124.48908474122868, 
        icon: redIcon, 
        category: "Alfamart",
        image: "aset/alfa_maubeli.jpg",
        address: "Jl. Maubeli No. 67, Kefamenanu",
        hours: "08:00 - 22:00",
        phone: "(0388) 3456789"
      },
      { 
        name: "Alfamart Eltari", 
        lat: -9.460917159678027, 
        lon: 124.4800970075803, 
        icon: redIcon, 
        category: "Alfamart",
        image: "aset/alfa_eltari.jpg",
        address: "Jl. Eltari No. 45, Kefamenanu",
        hours: "08:00 - 22:00",
        phone: "(0388) 3456789"
      },
      { 
        name: "Alfamart Terminal", 
        lat: -9.467025525844084, 
        lon: 124.48316084219395, 
        icon: redIcon, 
        category: "Alfamart",
        image: "aset/indo_terminal.png",
        address: "Jl. Terminal No. 45, Kefamenanu",
        hours: "08:00 - 22:00",
        phone: "(0388) 3456789"
      },
      { 
        name: "Alfamart Nasleu", 
        lat: -9.458215003463636, 
        lon: 124.48207735703295, 
        icon: redIcon, 
        category: "Alfamart",
        image: "aset/alfa_nasleu.jpg",
        address: "Jl. Nasleu No. 45, Kefamenanu",
        hours: "08:00 - 22:00",
        phone: "(0388) 3456789"
      },
      { 
        name: "Alfamart KM 6", 
        lat: -9.492823824993225, 
        lon: 124.492705017313, 
        icon: redIcon, 
        category: "Alfamart",
        image: "aset/alfa_km6.jpg",
        address: "Jl. KM 6 No. 45, Kefamenanu",
        hours: "08:00 - 22:00",
        phone: "(0388) 3456789"
      },
      { 
        name: "Alfamart Dalehi", 
        lat: -9.476235936223185, 
        lon: 124.48278424110593, 
        icon: redIcon, 
        category: "Alfamart",
        image: "aset/alfa_delhi.jpg",
        address: "Jl. Dalehi No. 45, Kefamenanu",
        hours: "08:00 - 22:00",
        phone: "(0388) 3456789"
      },
      // Tambahkan data Alfamart lainnya
      // ...
      // Swalayan lainnya (hijau)
      { 
        name: "Lay Swalayan", 
        lat: -9.46601315660902, 
        lon: 124.48074220974188, 
        icon: greenIcon, 
        category: "Swalayan",
        image: "aset/lay.jpg",
        address: "Jl. Lay No. 88, Kefamenanu",
        hours: "08:00 - 21:00",
        phone: "(0388) 1234560"
      },
      { 
        name: "Jabalmart", 
        lat: -9.446411572206294, 
        lon: 124.47901057094921, 
        icon: greenIcon, 
        category: "Swalayan",
        image: "aset/jabalmart.png",
        address: "Jl. Pasar Baru No. 89, Kefamenanu",
        hours: "07:00 - 20:30",
        phone: "(0388) 4567890"
      },
      { 
        name: "KCS Mart", 
        lat: -9.468687273592874, 
        lon: 124.48161274188922, 
        icon: greenIcon, 
        category: "Swalayan",
        image: "aset/kcs.jpg",
        address: "Jl. KCS No. 12, Kefamenanu",
        hours: "08:00 - 21:00",
        phone: "(0388) 5678901"
      },
      {
        name: "Happy Swalayan", 
        lat: -9.452622746956953, 
        lon: 124.47754115954848,
        icon: greenIcon, 
        category: "Swalayan",
        image: "aset/happy.jpg",
        address: "Jl. Sinar No. 34, Kefamenanu",
        hours: "07:30 - 22:00",
        phone: "(0388) 6789012"
      },
      { 
        name: "Central", 
        lat: -9.467246449994937, 
        lon: 124.4813133386215, 
        icon: greenIcon, 
        category: "Swalayan",
        image: "aset/central.jpg",
        address: "Jl. Sejahtera No. 56, Kefamenanu",
        hours: "08:00 - 21:30",
        phone: "(0388) 7890123"
      },
      { 
        name: "Toko Aimi", 
        lat: -9.447528731081809, 
        lon: 124.47855695419496, 
        icon: greenIcon, 
        category: "Swalayan",
        image: "aset/toko_aimi.jpg",
        address: "Jl. Aimi No. 12, Kefamenanu",
        hours: "08:00 - 21:00",
        phone: "(0388) 1234567"
      },
      {
        name: "Toko Karya Baru",
        lat: -9.448453426568806,
        lon: 124.478035584901,
        icon: greenIcon,
        category: "Swalayan",
        image: "aset/toko_karya_baru.jpeg",
        address: "Jl. Karya No. 34, Kefamenanu",
        hours: "08:00 - 21:00",
        phone: "(0388) 2345678"
      },
      {
        name: "Toko Rembulan",
        lat: -9.449024866343153,
        lon: 124.47779859886231,
        icon: greenIcon,
        category: "Swalayan",
        image: "aset/toko_rembulan.jpg",
        address: "Jl. Rembulan No. 45, Kefamenanu",
        hours: "08:00 - 21:00",
        phone: "(0388) 3456789"
      },
      { 
        name: "Mulia Jaya Swalayan", 
        lat: -9.455074389333069, 
        lon: 124.47835572140393, 
        icon: greenIcon, 
        category: "Swalayan",
        image: "aset/mulia_jaya.jpg",
        address: "Jl. Mulia No. 67, Kefamenanu",
        hours: "08:00 - 21:00",
        phone: "(0388) 4567890"
      },
      {
        name: "Sinar Mas",
        lat: -9.473322595709421,
        lon: 124.48260560097951,
        icon: greenIcon,
        category: "Swalayan",
        image: "aset/sinar_mas.jpg",
        address: "Jl. Sinar No. 45, Kefamenanu",
        hours: "08:00 - 21:00",
        phone: "(0388) 3456789"
      },
      {
        name: "Bintang Mart",
        lat: -9.485559378361486,
        lon: 124.48958603685185,
        icon: greenIcon,
        category: "Swalayan",
        image: "aset/bintang_mart.jpg",
        address: "Jl. Bintang No. 12, Kefamenanu",
        hours: "08:00 - 21:00",
        phone: "(0388) 4567890"
      },
      {
        name: "Putri Sulawesi 2",
        lat: -9.494858899416215,
        lon: 124.49233464291608,
        icon: greenIcon,
        category: "Swalayan",
        image: "aset/ps2.jpg",
        address: "Jl. Putri No. 2, Kefamenanu",
        hours: "08:00 - 21:00",
        phone: "(0388) 5678901"
      },
      {
        name: "Top Swalayan",
        lat: -9.503910320556374,
        lon: 124.49324029723864,
        icon: greenIcon,
        category: "Swalayan",
        image: "aset/top_swalayan.jpeg",
        address: "Jl. Top No. 1, Kefamenanu",
        hours: "08:00 - 21:00",
        phone: "(0388) 6789012"
      }
      // Tambahkan data swalayan lainnya

    ];

    // Layer untuk pencarian
    var markersLayer = new L.LayerGroup();
    map.addLayer(markersLayer);

    // Simpan marker untuk filtering
    var markerRefs = [];

    // Tambahkan semua marker dengan popup yang lebih informatif
    dataToko.forEach(function(toko) {
      var popupContent = `
        <div class="popup-content">
          <img src="${toko.image}" alt="${toko.name}" class="popup-image">
          <h4 class="popup-title">${toko.name}</h4>
          <span class="popup-category">${toko.category}</span>
          <div class="popup-details">
            <p><i class="bi bi-geo-alt"></i> ${toko.address}</p>
            <p><i class="bi bi-clock"></i> ${toko.hours}</p>
            <p><i class="bi bi-telephone"></i> ${toko.phone}</p>
          </div>
        </div>
      `;

      var marker = L.marker([toko.lat, toko.lon], { 
        icon: toko.icon,
        title: toko.name
      }).bindPopup(popupContent, {
        maxWidth: 300,
        minWidth: 250,
        className: 'custom-popup'
      });

      marker.category = toko.category;
      marker.tokoName = toko.name;
      markersLayer.addLayer(marker);
      markerRefs.push(marker);
    });

    // Fitur pencarian yang lebih baik
    function searchMarkers(keyword) {
      var found = false;
      var bounds = new L.LatLngBounds();
      
      markerRefs.forEach(function(marker) {
        var name = marker.tokoName.toLowerCase();
        if (keyword && name.includes(keyword.toLowerCase())) {
          bounds.extend(marker.getLatLng());
          marker.openPopup();
          found = true;
        } else {
          marker.closePopup();
        }
      });
      
      if (found && bounds.isValid()) {
        map.flyToBounds(bounds, {
          padding: [50, 50],
          maxZoom: 16
        });
      } else if (keyword) {
        alert('Lokasi tidak ditemukan');
      }
    }

    // Integrasi input pencarian
    var searchInput = document.getElementById('search');
    var searchBtn = document.getElementById('searchBtn');
    
    if (searchInput) {
      searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
          searchMarkers(searchInput.value);
        }
      });
    }
    
    if (searchBtn) {
      searchBtn.addEventListener('click', function() {
        searchMarkers(searchInput.value);
      });
    }

    // Filter functions dengan animasi
    function showAllMarkers() {
      markerRefs.forEach(function(marker) {
        if (!map.hasLayer(marker)) {
          markersLayer.addLayer(marker);
        }
      });
      map.flyTo([-9.467, 124.482], 14, {
        duration: 0.8
      });
    }

    function showMarkersByCategory(category) {
      var bounds = new L.LatLngBounds();
      var hasVisibleMarkers = false;
      
      markerRefs.forEach(function(marker) {
        if (marker.category === category) {
          if (!map.hasLayer(marker)) {
            markersLayer.addLayer(marker);
          }
          bounds.extend(marker.getLatLng());
          hasVisibleMarkers = true;
        } else {
          if (map.hasLayer(marker)) {
            markersLayer.removeLayer(marker);
          }
        }
      });
      
      if (hasVisibleMarkers && bounds.isValid()) {
        map.flyToBounds(bounds, {
          padding: [50, 50],
          maxZoom: 15,
          duration: 1
        });
      }
    }

    // Button event listeners dengan feedback
    function setActiveButton(btnId) {
      document.querySelectorAll('.filter-buttons button').forEach(btn => {
        btn.classList.remove('active');
        btn.style.transform = '';
      });
      
      var activeBtn = document.getElementById(btnId);
      activeBtn.classList.add('active');
      activeBtn.style.transform = 'scale(1.05)';
      
      setTimeout(() => {
        activeBtn.style.transform = '';
      }, 300);
    }

    document.getElementById('showAll').addEventListener('click', function() {
      showAllMarkers();
      setActiveButton('showAll');
    });
    
    document.getElementById('showIndomart').addEventListener('click', function() {
      showMarkersByCategory('Indomart');
      setActiveButton('showIndomart');
    });
    
    document.getElementById('showAlfamart').addEventListener('click', function() {
      showMarkersByCategory('Alfamart');
      setActiveButton('showAlfamart');
    });
    
    document.getElementById('showSwalayan').addEventListener('click', function() {
      showMarkersByCategory('Swalayan');
      setActiveButton('showSwalayan');
    });

    // Fitur lokasi pengguna
    var locateButton = document.getElementById('locateButton');
    if (locateButton) {
      locateButton.addEventListener('click', function() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            function(position) {
              var userLatLng = [position.coords.latitude, position.coords.longitude];
              map.flyTo(userLatLng, 16, {
                duration: 1
              });
              
              // Tambahkan marker lokasi pengguna
              L.circleMarker(userLatLng, {
                radius: 8,
                fillColor: "#1976d2",
                color: "#fff",
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8
              }).addTo(map)
                .bindPopup("Lokasi Anda Saat Ini")
                .openPopup();
            },
            function(error) {
              alert("Tidak dapat mendapatkan lokasi Anda: " + error.message);
            },
            {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 0
            }
          );
        } else {
          alert("Browser tidak mendukung geolokasi");
        }
      });
    }

    // Tampilkan semua marker saat load
    showAllMarkers();
  }
}



// Sidebar toggle
const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarOverlay = document.getElementById('sidebarOverlay');

function updateSidebarTogglePosition() {
  if (window.innerWidth <= 576) {
    // Mobile: toggle selalu fixed di kiri atas
    sidebarToggle.style.position = 'fixed';
    sidebarToggle.style.left = '20px';
    sidebarToggle.style.top = '20px';
    sidebarToggle.style.right = 'auto';
    sidebarToggle.style.zIndex = 1200;
  } else if (document.body.classList.contains('sidebar-closed')) {
    // Closed: toggle fixed di kiri atas
    sidebarToggle.style.position = 'fixed';
    sidebarToggle.style.left = '20px';
    sidebarToggle.style.top = '20px';
    sidebarToggle.style.right = 'auto';
    sidebarToggle.style.zIndex = 1200;
  } else {
    // Open: toggle di pojok kanan atas sidebar
    sidebarToggle.style.position = 'absolute';
    sidebarToggle.style.right = '20px';
    sidebarToggle.style.left = 'auto';
    sidebarToggle.style.top = '20px';
    sidebarToggle.style.zIndex = 1101;
  }
}

function toggleSidebar() {
  document.body.classList.toggle('sidebar-closed');
  sidebar.classList.toggle('mobile-visible');
  updateSidebarTogglePosition();

  // Overlay hanya di mobile
  if (window.innerWidth <= 576) {
    sidebarOverlay.style.display = sidebar.classList.contains('mobile-visible') ? 'block' : 'none';
  } else {
    sidebarOverlay.style.display = 'none';
  }
  // Perbarui peta jika ada
  if (typeof map !== 'undefined') {
    setTimeout(() => {
      map.invalidateSize();
    }, 300);
  }
}

sidebarToggle.addEventListener('click', toggleSidebar);
sidebarOverlay.addEventListener('click', toggleSidebar);

window.addEventListener('resize', updateSidebarTogglePosition);
document.addEventListener('DOMContentLoaded', function() {
  updateSidebarTogglePosition();
  initMapSwalayan();
  sidebarOverlay.style.display = 'none';
});