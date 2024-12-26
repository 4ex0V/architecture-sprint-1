module.exports = {
    name: "MestoApp",
    remotes: {
        "auth": "auth@http://localhost:8081/remoteEntry.js",
        "photos": "photos@http://localhost:8082/remoteEntry.js",
        "profile": "profile@http://localhost:8083/remoteEntry.js",
    },
    shared: ["react", "react-dom"]
    };     