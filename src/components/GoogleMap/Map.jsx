
import BingMapsReact from "bingmaps-react";

const Map = () => {
    return (
        <BingMapsReact
            bingMapsKey="Apx7uZ945pJEqED04phffbVhj7eOC2OY2aMEKppjIjs2X_IWOYurJPCyLEzzMahC"
            height="500px"
            mapOptions={{
                navigationBarMode: "square",
            }}
            width="500px"
            viewOptions={{
                center: { latitude: 42.360081, longitude: -71.058884 },
                mapTypeId: "grayscale",
            }}
        />
    );
};

export default Map;

// 