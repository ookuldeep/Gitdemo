document.addEventListener("DOMContentLoaded", function () {
    const clothingList = [];
    const wardrobeList = document.getElementById("wardrobe-list");
    const outfitResults = document.getElementById("outfit-results");

    document.getElementById("add-clothing").addEventListener("click", function () {
        const name = document.getElementById("clothing-name").value;
        const color = document.getElementById("clothing-color").value;
        const size = document.getElementById("clothing-size").value;
        const fit = document.getElementById("clothing-fit").value;

        if (name && color && size && fit) {
            const clothingItem = { name, color, size, fit };
            clothingList.push(clothingItem);
            updateWardrobe();
        }
    });

    function updateWardrobe() {
        wardrobeList.innerHTML = "";
        clothingList.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - ${item.color}, ${item.size}, ${item.fit}`;
            wardrobeList.appendChild(li);
        });
    }

    document.getElementById("generate-outfits").addEventListener("click", function () {
        if (clothingList.length < 3) {
            outfitResults.innerHTML = "<p>Add more clothes to generate outfits.</p>";
            return;
        }

        let generatedOutfits = generateOutfitsAI(clothingList);
        outfitResults.innerHTML = generatedOutfits.map((outfit, index) =>
            `<p>Day ${index + 1}: ${outfit}</p>`
        ).join("");
    });

    function generateOutfitsAI(clothingList) {
        let outfits = [];
        for (let i = 0; i < 7; i++) {
            let randomItem = clothingList[Math.floor(Math.random() * clothingList.length)];
            outfits.push(`Outfit ${i + 1}: ${randomItem.name}, Color: ${randomItem.color}, Fit: ${randomItem.fit}`);
        }
        return outfits;
    }
});
