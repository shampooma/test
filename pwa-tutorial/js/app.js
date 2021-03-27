if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => {
            console.log("service worker registered");
            console.log(reg);
        })
        .catch((err) => {
            console.log("service worker not registered");
            console.log(err);
        })
} else {
    console.log("no service worker")
}