function updateTimeline(year) {
    const title = document.getElementById("timeline-title");
    const description = document.getElementById("timeline-description");
    const image = document.getElementById("timeline-image");

    if (year === "2002") {
        title.textContent = "Nuestra Historia";
        description.textContent = "En este año, nació nuestra visión de ofrecer las mejores carnes a la brasa en la ciudad y abrimos nuestro primer restaurante, convirtiendo nuestra pasión en un éxito local.";
        image.src = "img/Acerca de/Local 1.png"; 
    } else if (year === "2008") {
        title.textContent = "Popularizamos";
        description.textContent = "Nos volvimos mas conocidos, venia gente de otras ciudades a comer a nuestro restaurante, gracias a la calidad de nuestros productos.";
        image.src = "img/Acerca de/Fondo 4.png";
    } else if (year === "2014") {
        title.textContent = "Expansión";
        description.textContent = "Expandimos nuestra presencia a otros lados de trujillo con nuevas sucursales, debido a esto, pudimos compartiendo nuestra pasión.";
        image.src = "img/Acerca de/Fondo 2.png";
    } else if (year === "2020") {
        title.textContent = "Innovación";
        description.textContent = "Introducimos nuevas tecnologías y sostenibilidad para seguir creciendo, ademas aprendimos nuevas tecnicas de cocina, como cocina molecular, coción al vacio, etc.";
        image.src = "img/Acerca de/Fondo 3.png";
    }
}


function changeContent(section) {
    const textSection = document.getElementById("text-section");
    const imageSection = document.getElementById("image-section");

    if (section === "somos") {
        textSection.innerHTML = `
            <h2>Quiénes somos</h2>
            <p>En Carnes y Brasas, nos destacamos por nuestra tradición culinaria y pasión por las brasas. Con más de 20 años de experiencia, ofrecemos platos únicos que celebran la excelencia de las carnes.</p>
            <p>Desde nuestros inicios en 2002, hemos mantenido un compromiso con la calidad y la innovación, ganándonos el reconocimiento de nuestros clientes.</p>`;
        imageSection.innerHTML = `<img src="img/Acerca de/M 1.png" alt="Historia de Carnes y Brasas">`;
    } else if (section === "mision") {
        textSection.innerHTML = `
            <h2>Nuestra misión</h2>
            <p>Brindar a nuestros clientes una experiencia culinaria única, enfocándonos en la calidad de nuestras carnes y la excelencia en el servicio.</p>`;
        imageSection.innerHTML = `<img src="img/Acerca de/M 2.png" alt="Nuestra misión">`;
    } else if (section === "objetivos") {
        textSection.innerHTML = `
            <h2>Nuestros objetivos</h2>
            <p>Ser reconocidos como el mejor restaurante de carnes en la región, expandiendo nuestra pasión por las brasas a nuevos horizontes.</p>`;
        imageSection.innerHTML = `<img src="img/Acerca de/M 3.png" alt="Nuestros objetivos">`;
    } else if (section === "valores") {
        textSection.innerHTML = `
            <h2>Nuestros valores</h2>
            <p>Compromiso, calidad, innovación y pasión por la excelencia en cada plato que servimos.</p>`;
        imageSection.innerHTML = `<img src="img/Acerca de/M 4.png" alt="Nuestros valores">`;
    }
}