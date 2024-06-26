// Function to check if an element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Function to show timeline items one by one
function showTimelineItemsSequential() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  let delay = 0;

  timelineItems.forEach((item, index) => {
    if (isInViewport(item) && !item.classList.contains('show')) {
      setTimeout(() => {
        item.classList.add('show');
      }, delay);
      delay += 200; // Adjust the delay as needed for desired animation speed
    }
  });
}

// Debounce function to limit the rate at which showTimelineItemsSequential is called
function debounce(func, delay) {
  let timer;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

// Function to initialize debounced scroll event listener
function initializeScrollEvents() {
  const showTimelineItemsDebounced = debounce(showTimelineItemsSequential, 100);

  // Event listener to call showTimelineItemsSequential on scroll, debounced for performance
  document.addEventListener('scroll', showTimelineItemsDebounced);

  // Initial check when page loads
  showTimelineItemsSequential();
}

// Call the initializeScrollEvents function to set up scroll event listeners
initializeScrollEvents();

// Function to toggle hamburger menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// Function to duplicate carousel items infinitely
function duplicateCarouselItems() {
  const carouselList = document.querySelector('.logo-list');
  const items = carouselList.querySelectorAll('li');
  const totalItems = items.length;

  for (let i = 0; i < totalItems; i++) {
    const clone = items[i].cloneNode(true);
    carouselList.appendChild(clone);
  }
}

// Call the function to duplicate carousel items
duplicateCarouselItems();
