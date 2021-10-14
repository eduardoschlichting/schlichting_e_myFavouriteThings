(() => {

    const    thingButtons = document.querySelectorAll(".things-button");
    let things = {};


    // set up a Fetch function and get some data
    function getData() {
        // retrieve our data object
        fetch("./data.json") // go and get the data (fetch boy!)
            .then(res => res.json()) // good dog! clean the stick (convert the data to a plain object)
            .then(data => {
                console.log(data);
                things = data;
                
            })
            .catch(error => console.error(error));
    }


    function showDataThing(event) {

        
        console.log('clicked');
        let currentPanel = document.querySelector('.thing__panel');
        // remove the hidden class
        if(currentPanel) {
            currentPanel.classList.remove('hidden');

            let containers = currentPanel.children;

            // add the image
            containers[0].querySelector("img").src = `images/${things[this.dataset.key].image}`;

            // update the text
            containers[1].textContent = things[this.dataset.key].nameThing;
            containers[2].textContent = things[this.dataset.key].thing;
            containers[3].textContent = things[this.dataset.key].what;
            containers[4].textContent = things[this.dataset.key].description;
            containers[5].textContent = things[this.dataset.key].nice;
            containers[6].textContent = things[this.dataset.key].mark;

        }
        else {
            currentPanel.classList.add('hidden');
        };
        // instead of hide/show, repopulate it with the data (DONE! YAY!)

    };

    thingButtons.forEach(btn => (btn.addEventListener("click", showDataThing)));

    getData();

})();