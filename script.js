document.addEventListener('DOMContentLoaded', function() {
    console.log("Welcome to Cybersecurity Awareness!");
    
    // Form submission handling (for demonstration purposes)
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert("Thank you for your message!");
            form.reset();
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const newsContainer = document.querySelector('.news-container');

    // Sample data for demonstration purposes
    const newsArticles = [
        {
            title: "Cybersecurity Trends in 2024",
            summary: "Explore the latest trends in cybersecurity and how they impact businesses.",
            link: "#"
        },
        {
            title: "How to Protect Your Data",
            summary: "Learn effective strategies to safeguard your personal information online.",
            link: "#"
        },
        {
            title: "Understanding Ransomware Attacks",
            summary: "A deep dive into ransomware attacks and how to prevent them.",
            link: "#"
        }
    ];

    // Function to display news articles
    function displayNews() {
        newsArticles.forEach(article => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');
            newsItem.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.summary}</p>
                <a href="${article.link}">Read more</a>
            `;
            newsContainer.appendChild(newsItem);
        });
    }

    // Call the function to display news
    displayNews();
});