export function sortBaits() {
    const sortBtn = document.querySelector("#sort-btn");
    const textArea = document.querySelector(".bait-form__textarea");

    sortBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const baitsArray = textArea.value.split("\n");

        const circl = filterArray(baitsArray, "Circl");
        const vib = filterArray(baitsArray, "Vib");
        const vob = filterArray(baitsArray, "Vob");
        const xtail = filterArray(baitsArray, "X-Tail");
        const tvis = filterArray(baitsArray, "Tvis");
        const creatures = filterArray(baitsArray, "Creatures");
        const foam = filterArray(baitsArray, "Foam");
        const propeller = filterArray(baitsArray, "Propeller");
        const handMadePlug = filterArray(baitsArray, "Hand made Plug");
        let bioBaits = filterArray(baitsArray, [
            "Circl",
            "Vib",
            "Vob",
            "X-Tail",
            "Tvis",
            "Creatures",
            "Foam",
            "Propeller",
            "Hand made Plug",
        ]);

        bioBaits = bioBaits.filter(function (entry) {
            return entry.trim() != "";
        });

        const baitsBox = document.querySelector("#baits-sort-box");

        createLists(baitsBox, [
            circl.sort(),
            vib.sort(),
            vob.sort(),
            xtail.sort(),
            tvis.sort(),
            creatures.sort(),
            foam.sort(),
            propeller.sort(),
            handMadePlug.sort(),
            bioBaits.sort(),
        ]);

        const itemBtns = document.querySelectorAll(".sort-list__btn");
        itemBtns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const el = e.target.parentNode;
                const list = e.target.parentNode.parentNode;
                el.remove();

                if (!list.contains(list.querySelector("li"))) {
                    list.remove();
                }
            });
        });
    });
}

function createLists(parentNode, arrays) {
    arrays.forEach((array) => {
        if (array.length != 0) {
            const ul = document.createElement("ul");
            ul.classList.add("sort-list");
            for (let i = 0; i < array.length; i++) {
                const li = document.createElement("li");
                li.classList.add("sort-list__item");
                const span = document.createElement("span");
                span.classList.add("sort-list__span");
                span.textContent = array[i];
                li.append(span);
                const deleteBtn = document.createElement("div");
                deleteBtn.classList.add("sort-list__btn");
                li.append(deleteBtn);
                ul.append(li);
            }
            parentNode.append(ul);
        }
    });
}

function filterArray(array, filter) {
    let filterArray = [];
    array.forEach((element) => {
        if (Array.isArray(filter)) {
            let counter = 0;
            for (let i = 0; i < filter.length; i++) {
                if (element.includes(filter[i])) {
                    counter++;
                }
            }
            if (counter == 0) {
                filterArray.push(element);
            }
        } else {
            if (element.includes(filter)) {
                filterArray.push(element);
            }
        }
    });

    return filterArray;
}
