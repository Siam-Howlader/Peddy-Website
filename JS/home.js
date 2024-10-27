// loading all pets info
const loadAllPets = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(response => response.json())
        .then(data => displayPets(data.pets))
        .catch(error => console.log(error))
};
loadAllPets();

// displaying all pets info
const displayPets = (pets) => {
    const section = document.getElementById('section');
    section.classList = 'w-3/4 grid xl::grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-3 xl:gap-5 gap-2';
    const display = pets.forEach(pet => {
        const div = document.createElement('div');
        div.classList = "h-11/12"
        div.innerHTML = `
        <div class="xl:p-5 p-2 border-[1px] rounded-xl">
            <div class="w-full xl:h-1/2 lg:h-1/2 mb-2"><img src = "${pet.image}" alt="" class="rounded-xl w-full h-full"></div>
            <div class="h-1/2">
                <p class = "font-extrabold text-2xl text-[#131313] mb-2">${!(pet.pet_name)? "Not Available" : pet.pet_name}</p>
                <div class = "flex xl:gap-3 gap-1 items-center mb-2">
                    <div><img src = "../images/bread_logo.png" alt = "" class = "w-[24px] h-[24px]"></div>
                    <p class = "text-[rgba(19,19,19,0.7)] xl:text-lg" > Breed: ${!(pet.breed)? "Not Available" : pet.breed}</p>
                </div>
                <div class = "flex xl:gap-3 gap-1 items-center mb-2" >
                    <div><img src = "../images/bd_icon.png" alt = "" class = "w-[24px] h-[24px]"></div>
                    <p class = "text-[rgba(19,19,19,0.7)] xl:text-lg" > Birth: ${!(pet.date_of_birth)?"Not available":pet.date_of_birth}</p>
                </div>
                <div class = "flex xl:gap-3 gap-1 items-center mb-2" >
                    <div><img src = "../images/gender_icon.png" alt = "" class = "w-[24px] h-[24px]"></div>
                    <p class = "text-[rgba(19,19,19,0.7)] xl:text-lg" > Gender: ${!(pet.gender)?"Not Available":pet.gender}</p>
                </div>
                <div class = "flex xl:gap-3 gap-1 items-center mb-2" >
                    <div><img src = "../images/price_icon.png" alt = "" class = "w-[24px] h-[24px]"></div>
                    <p class = "text-[rgba(19,19,19,0.7)] xl:text-lg" >Price: ${!(pet.price)?"Not Available":pet.price}</p>
                </div><hr class="mb-4">
                <div class="flex justify-between items-center">
                    <div>
                        <button class="xl:py-2 lg:py-1 py-1 xl:px-3 px-2 lg:px-1 md:px-2 rounded-lg border-[rgba(14,121,129,0.15)] border-[2px]" onclick = "like('${pet.image}')"><img src="../images/like.png" alt="" class="w-[24px] h-[24px]"></button>
                    </div>
                    <div>
                        <button class="xl:py-2 lg:py-1 py-1 xl:px-3 lg:px-1 px-3 rounded-lg border-[rgba(14,121,129,0.15)] border-[2px] text-[#0E7A81] font-bold text-lg" onclick = "openModal()">Adopt</button>
                    </div>
                    <div>
                        <button class="xl:py-2 lg:py-1 py-1 xl:px-3 lg:px-1 px-3 rounded-lg border-[rgba(14,121,129,0.15)] border-[2px] text-[#0E7A81] font-bold text-lg" onclick="ShowModal('${pet.petId}')">Details</button>
                    </div>
                </div>
            </div>
        </div>
        `
        section.appendChild(div);
    });
};
// my_modal_1.
// modal
function ShowModal(id) {
    const Fetch = `https://openapi.programming-hero.com/api/peddy/pet/${id}`;
    fetch(Fetch)
        .then(res => res.json())
        .then(pet => obj(pet.petData))
        .catch(error => console.log(error));
    const div = document.createElement('div');
    let pet;

    function obj(petdata) {
        pet = petdata;
        document.getElementById('imageid').innerHTML = `<img src="${pet.image}" alt="" class="w-full rounded-xl" />`;
        document.getElementById('nameid').innerHTML = `<h1 class="font-bold text-2xl text-[#131313] my-3">${pet.pet_name}</h1>`;
        document.getElementById('breedid').innerText = `Breed: ${!(pet.breed)? "Not Available" : pet.breed}`;
        document.getElementById('bdid').innerText = `Birth: ${!(pet.date_of_birth)?"Not available":pet.date_of_birth}`;
        document.getElementById('genderid').innerText = `Gender: ${!(pet.gender)?"Not Available":pet.gender}`;
        document.getElementById('priceid').innerText = `Price: ${!(pet.price)?"Not Available":pet.price}`;
        document.getElementById('vid').innerText = `Vaccinated status: ${!(pet.vaccinated_status)?"Not Available":pet.vaccinated_status}`;
        document.getElementById('dtlsid').innerText = `${!(pet.pet_details)?"Not Available":pet.pet_details}`
        my_modal_1.showModal();
    };
};

function like(image) {
    const div = document.createElement('div');
    div.innerHTML = `
        <img src = "${image}" alt="" class = "rounded-[8px]"/>
    `
    document.getElementById('likes').appendChild(div);
}


//display dogs
const displayDogs = (pets) => {
    const section = document.getElementById('section');
    const temp = document.getElementById('temp');
    if (pets.length !== 0) {
        section.classList = 'w-3/4 grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 md:grid-cols-2 lg:gap-3 xl:gap-5 gap-2';
    }
    section.innerHTML = '';
    for (let i = 0; i < pets.length; i++) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div div class = "xl:p-5 p-2 border-[1px] rounded-xl">
            <div class="w-full xl:h-1/2 lg:h-1/2 mb-2"><img src = "${pets[i].image}" alt="" class="rounded-xl w-full h-full"></div>
            <p class = "font-extrabold text-2xl text-[#131313] mb-2">${!(pets[i].pet_name)? "Not Available" : pets[i].pet_name}</p>
            <div div class = "flex xl:gap-3 gap-1 items-center mb-2">
                <div><img src = "../images/bread_logo.png" alt = "" class = "w-[24px] h-[24px]"></div>
                <p class = "text-[rgba(19,19,19,0.7)] xl:text-lg"> Breed: ${!(pets[i].breed)? "Not Available" : pets[i].breed}</p>
            </div>
            <div div class = "flex xl:gap-3 gap-1 items-center mb-2">
                <div><img src = "../images/bd_icon.png" alt = "" class = "w-[24px] h-[24px]"></div>
                <p class = "text-[rgba(19,19,19,0.7)] xl:text-lg" > Birth: ${!(pets[i].date_of_birth)?"Not available":pets[i].date_of_birth}</p>
            </div>
            <div div class = "flex xl:gap-3 gap-1 items-center mb-2">
                <div><img src = "../images/gender_icon.png" alt = "" class = "w-[24px] h-[24px]"></div>
                <p class = "text-[rgba(19,19,19,0.7)] xl:text-lg" > Gender: ${!(pets[i].gender)?"Not Available":pets[i].gender}</p>
            </div>
            <div div class = "flex xl:gap-3 gap-1 items-center mb-2">
                <div><img src = "../images/price_icon.png" alt = "" class = "w-[24px] h-[24px]"></div>
                <p class = "text-[rgba(19,19,19,0.7)] xl:text-lg" >Price: ${!(pets[i].price)?"Not Available":pets[i].price}</p>
            </div><hr class="mb-4">
            <div class="flex justify-between items-center gap-2">
                <div>
                    <button class="xl:py-2 lg:py-1 py-1 xl:px-3 md:px-2 px-2 lg:px-1 rounded-lg border-[rgba(14,121,129,0.15)] border-[2px]" onclick = "like('${pets[i].image}')"><img src="../images/like.png" alt="" class="w-[24px] h-[24px]"></button>
                </div>
                <div>
                    <button class="xl:py-2 lg:py-1 py-1 xl:px-3 lg:px-1 px-3 rounded-lg border-[rgba(14,121,129,0.15)] border-[2px] text-[#0E7A81] font-bold text-lg" onclick= "openModal()">Adopt</button>
                </div>
                <div>
                    <button class="xl:py-2 lg:py-1 py-1 xl:px-3 lg:px-1 px-3 rounded-lg border-[rgba(14,121,129,0.15)] border-[2px] text-[#0E7A81] font-bold text-lg" onclick="ShowModal('${pets[i].petId}')">Details</button>
                </div>
            </div>
        </div>
        `
        section.appendChild(div);
    }
    if (pets.length === 0) {
        section.classList = 'w-3/4'
        section.innerHTML = `
        <section class = "bg-[rgba(19,19,19,0.03)] rounded-3xl flex justify-between items-center py-24 px-32 mb-8">
            <div><img src = "../images/error.webp" alt = "" class = "mx-auto">
                <p class = "text-[#131313] text-3xl font-bold text-center my-3" >Sorry, this category of pets are not available right now</p>
                <p class = "w-1/2 text-center mx-auto text-[rgba(19,19,19,0.7)]" >Please stay with Peddy</p>
            </div>
        </section>
        `
    }
}

// load dogs
const loadAndDisplay = (petsAPI) => {
    fetch(petsAPI)
    .then(response => response.json())
    .then(pet => displayDogs(pet.data))
    .catch(error => console.log(error));
};

function sort(arr) {
    // console.log(arr);
    let i, j, temp;
    for (i = 0; i < arr.length - 1; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i].price < arr[j].price) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
    displayDogs(arr);
}

// dogs button clicking
document.getElementById('dogs').addEventListener('click', function () {
    loadAndDisplay('https://openapi.programming-hero.com/api/peddy/category/dog');
    const dogbtn = document.getElementById('dogs');
    const dogbtntext = document.getElementById('dogbtntext');
    dogbtn.classList.add("bg-[#0E7A81]");
    dogbtntext.classList.add("text-[#FFF]");
    const catbtn = document.getElementById('cats');
    const catbtntext = document.getElementById('catbtntext');
    catbtn.classList.remove("bg-[#0E7A81]");
    catbtntext.classList.remove("text-[#FFF]");
    const rabbitbtn = document.getElementById('rabbits');
    const rabbitbtntext = document.getElementById('rabbitbtntext');
    rabbitbtn.classList.remove("bg-[#0E7A81]");
    rabbitbtntext.classList.remove("text-[#FFF]");
    const birdbtn = document.getElementById('birds');
    const birdbtntext = document.getElementById('birdbtntext');
    birdbtn.classList.remove("bg-[#0E7A81]");
    birdbtntext.classList.remove("text-[#FFF]");
});
document.getElementById('cats').addEventListener('click', function () {
    loadAndDisplay('https://openapi.programming-hero.com/api/peddy/category/cat');
    const catbtn = document.getElementById('cats');
    const catbtntext = document.getElementById('catbtntext');
    catbtn.classList.add("bg-[#0E7A81]");
    catbtntext.classList.add("text-[#FFF]");
    const rabbitbtn = document.getElementById('rabbits');
    const rabbitbtntext = document.getElementById('rabbitbtntext');
    rabbitbtn.classList.remove("bg-[#0E7A81]");
    rabbitbtntext.classList.remove("text-[#FFF]");
    const birdbtn = document.getElementById('birds');
    const birdbtntext = document.getElementById('birdbtntext');
    birdbtn.classList.remove("bg-[#0E7A81]");
    birdbtntext.classList.remove("text-[#FFF]");
    const dogbtn = document.getElementById('dogs');
    const dogbtntext = document.getElementById('dogbtntext');
    dogbtn.classList.remove("bg-[#0E7A81]");
    dogbtntext.classList.remove("text-[#FFF]");
});
document.getElementById('rabbits').addEventListener('click', function () {
    loadAndDisplay('https://openapi.programming-hero.com/api/peddy/category/rabbit');
    const rabbitbtn = document.getElementById('rabbits');
    const rabbitbtntext = document.getElementById('rabbitbtntext');
    rabbitbtn.classList.add("bg-[#0E7A81]");
    rabbitbtntext.classList.add("text-[#FFF]");
    const birdbtn = document.getElementById('birds');
    const birdbtntext = document.getElementById('birdbtntext');
    birdbtn.classList.remove("bg-[#0E7A81]");
    birdbtntext.classList.remove("text-[#FFF]");
    const catbtn = document.getElementById('cats');
    const catbtntext = document.getElementById('catbtntext');
    catbtn.classList.remove("bg-[#0E7A81]");
    catbtntext.classList.remove("text-[#FFF]");
    const dogbtn = document.getElementById('dogs');
    const dogbtntext = document.getElementById('dogbtntext');
    dogbtn.classList.remove("bg-[#0E7A81]");
    dogbtntext.classList.remove("text-[#FFF]");
});
document.getElementById('birds').addEventListener('click', function () {
    loadAndDisplay('https://openapi.programming-hero.com/api/peddy/category/bird');
    const birdbtn = document.getElementById('birds');
    const birdbtntext = document.getElementById('birdbtntext');
    birdbtn.classList.add("bg-[#0E7A81]");
    birdbtntext.classList.add("text-[#FFF]");
    const rabbitbtn = document.getElementById('rabbits');
    const rabbitbtntext = document.getElementById('rabbitbtntext');
    rabbitbtn.classList.remove("bg-[#0E7A81]");
    rabbitbtntext.classList.remove("text-[#FFF]");
    const catbtn = document.getElementById('cats');
    const catbtntext = document.getElementById('catbtntext');
    catbtn.classList.remove("bg-[#0E7A81]");
    catbtntext.classList.remove("text-[#FFF]");
    const dogbtn = document.getElementById('dogs');
    const dogbtntext = document.getElementById('dogbtntext');
    dogbtn.classList.remove("bg-[#0E7A81]");
    dogbtntext.classList.remove("text-[#FFF]");
});


document.getElementById('sortid').addEventListener('click',function(){
    const dogsclassarray = document.getElementById('dogs').className;
    const catsclassarray = document.getElementById('cats').className;
    const rabbitsclassarray = document.getElementById('rabbits').className;
    const birdsclassarray = document.getElementById('birds').className;
    if (dogsclassarray.includes('bg-[#0E7A81]')){
        fetch('https://openapi.programming-hero.com/api/peddy/category/dog')
        .then(res => res.json())
        .then(pets => sort(pets.data))
        .catch(error => console.log(error));
    }
    else if (catsclassarray.includes("bg-[#0E7A81]"))
    {
        fetch('https://openapi.programming-hero.com/api/peddy/category/cat')
            .then(res => res.json())
            .then(pets => sort(pets.data))
            .catch(error => console.log(error));
    }
    else if (rabbitsclassarray.includes("bg-[#0E7A81]"))
    {
        fetch('https://openapi.programming-hero.com/api/peddy/category/rabbit')
            .then(res => res.json())
            .then(pets => sort(pets.data))
            .catch(error => console.log(error));
    }
    else if (birdsclassarray.includes("bg-[#0E7A81]"))
    {
        fetch('https://openapi.programming-hero.com/api/peddy/category/bird')
            .then(res => res.json())
            .then(pets => sort(pets.data))
            .catch(error => console.log(error));
    }
    else
    {
        fetch('https://openapi.programming-hero.com/api/peddy/pets')
            .then(res => res.json())
            .then(petss => sort(petss.pets))
            .catch(error => console.log(error));
    }
});

let countdown = 5;
let countdownInterval;

function openModal() {
    countdown = 5;
    document.getElementById("countdown").textContent = countdown;
    document.getElementById("modalBackdrop").classList.remove("hidden");

    countdownInterval = setInterval(() => {
        countdown--;
        document.getElementById("countdown").textContent = countdown;

        if (countdown <= 0) {
            closeModal();
            clearInterval(countdownInterval);
        }
    }, 1000);
}

function closeModal() {
    document.getElementById("modalBackdrop").classList.add("hidden");
    clearInterval(countdownInterval);
}