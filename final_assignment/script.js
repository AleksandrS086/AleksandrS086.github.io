document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 0;
    showSlides();
  
    function showSlides() {
      let i;
      const slides = document.getElementsByClassName("slide");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 3000); 
    }
  });

  

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      if (window.location.href.indexOf("about.html") > -1) {
        const userResponse = confirm("Thank you for exploring our About Us page! Would you like to join our tennis community?");
        
        if (userResponse) {
          alert("Great! We look forward to having you in our tennis community.");
        } else {
          alert("No worries! Feel free to explore more or contact us if you have any questions.");
        }
      }
    }, 60000);
  });



document.addEventListener('DOMContentLoaded', function () {
    const hasVisitedBefore = localStorage.getItem('visitedBefore');

    if (!hasVisitedBefore) {
      const userName = prompt("Welcome to Tennis Enthusiasts Club! What's your name?");
  
      if (userName) {
        alert(`Hello, ${userName}! We're excited to have you here. Enjoy exploring our tennis community.`);
      } else {
        alert("Hello! We're excited to have you here. Enjoy exploring our tennis community.");
      }
  
      localStorage.setItem('visitedBefore', true);
    }
  });



document.addEventListener('DOMContentLoaded', function () {
  const nextTournamentDate = new Date('2024-07-01T00:00:00Z');

  function updateCountdown() {
    const now = new Date();
    const timeDifference = nextTournamentDate - now;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      document.getElementById('countdown').innerHTML = `
        ${days}d ${hours}h ${minutes}m ${seconds}s until the next Wimbledon tournament!
      `;
      setTimeout(updateCountdown, 1000);
    } else {

      document.getElementById('countdown').innerHTML = 'The tournament is happening now!';
    }
  }

  updateCountdown();
});


document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('myModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const confirmJoinBtn = document.getElementById('confirmJoinBtn');
  
    openModalBtn.addEventListener('click', function () {
      modal.style.display = 'block';
    });
  
    closeModalBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  
    confirmJoinBtn.addEventListener('click', function () {
      alert("Great! We'll see you at the next tennis event!");
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  



document.addEventListener('DOMContentLoaded', function () {
    const imageToEnlarge = document.getElementById('enlargeImage');
    const enlargedImgContainer = document.createElement('div');
    enlargedImgContainer.id = 'enlargedImgContainer';
  
    const enlargedImg = document.createElement('img');
    enlargedImg.id = 'enlargedImg';
    enlargedImgContainer.appendChild(enlargedImg);
  
    document.body.appendChild(enlargedImgContainer);
  
    imageToEnlarge.addEventListener('click', function () {
      enlargedImg.src = imageToEnlarge.src;
      enlargedImgContainer.style.display = 'block';
    });
  
    enlargedImgContainer.addEventListener('click', function () {
      enlargedImgContainer.style.display = 'none';
    });
  });
  