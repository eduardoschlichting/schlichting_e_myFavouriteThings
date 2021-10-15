(() => {

    const    thingButtons = document.querySelectorAll(".things-button"),
             discoverBtn = document.querySelector('.discover-button'),
             thingsDiv = document.querySelector('.things'),
             splashPage = document.querySelector('.home-splash');
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

    function showThings() {
        thingsDiv.classList.remove('hidden');
        splashPage.classList.add('hidden');

    }

    discoverBtn.addEventListener("click", showThings);
    thingButtons.forEach(btn => (btn.addEventListener("click", showDataThing)));

    thingButtons.forEach(btn => (btn.addEventListener("click", function(e) {
        e.preventDefault;

        let currentPanel = document.querySelector('.thing__panel'),
            title = document.querySelector('.thing__name-of-1'),
            name = document.querySelector('.thing__title'),
            what = document.querySelector('.thing__name-of-2'),
            whatRes = document.querySelector('.thing__description'),
            mark = document.querySelector('.thing__name-of-3'),
            markRes = document.querySelector('.thing__mark');

            // removes animation
        currentPanel.classList.remove("run-animation");
        title.classList.remove("run-animation-1");
        name.classList.remove("run-animation-1");
        what.classList.remove("run-animation-2");
        whatRes.classList.remove("run-animation-2");
        mark.classList.remove("run-animation-3");
        markRes.classList.remove("run-animation-3");

        // reset animation / reflow
        void currentPanel.offsetWidth;
        void title.offsetWidth;
        void name.offsetWidth;
        void what.offsetWidth;
        void whatRes.offsetWidth;
        void mark.offsetWidth;
        void markRes.offsetWidth;

        // add the animation again
        currentPanel.classList.add("run-animation");
        title.classList.add("run-animation-1");
        name.classList.add("run-animation-1");
        what.classList.add("run-animation-2");
        whatRes.classList.add("run-animation-2");
        mark.classList.add("run-animation-3");
        markRes.classList.add("run-animation-3");
    }, false)));


    getData();

})();