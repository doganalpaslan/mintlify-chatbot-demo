window.mintlifyWidgetSettings = {
    connection: {
        apiKey: 'mint_dsc_3Za3WVFcBPsjQ3R1FSCHMTh2'  // Buraya Mintlify panosundan aldığın API anahtarını ekle
    },
    display: {
        trigger: {
            type: 'button', // Tetikleyici tipi: 'button'
            buttonIcon: 'chat', // Buton için ikon: 'chat', 'sparkles', 'mintlify'
            iconOnly: true // Sadece ikonu göster
        },
        colors: {
            primary: '#0D9373', // Ana renk
            primaryLight: '#55D799' // Karanlık moddaki ana renk
        }
    }
};

(function () {
    if (!document.getElementById('mintlify-widget')) {
        var script = document.createElement('script');
        script.id = 'mintlify-widget';
        script.src = 'https://unpkg.com/@mintlify/widget@^0';
        script.onload = () => MintlifyWidget.init();
        document.head.appendChild(script);
    }
})();
