// Memuat data dari file JSON secara asinkron menggunakan fetch API
fetch('LailatulQadar.json')
  .then(response => response.json())
  .then(data => {
    // data akan berisi informasi artikel dari file JSON
    renderArticles(data); // Panggil fungsi renderArticles dengan data artikel
  })
  .catch(error => {
    console.error('Error saat memuat file JSON:', error);
  });

// Fungsi untuk menampilkan artikel
function renderArticles(articles) {
    var articleContainer = document.getElementById("article-container");

    articles.forEach(function(article) {
        var articleElement = document.createElement("article");
        articleElement.innerHTML = `
            <a class="article-content">${article.content}</a>
            <p class="article-content2">${article.content2}</p>
            <p class="article-content-arab">${article.contentArab}</p>
            <a class="article-content-arti">${article.contentArti}</a>
        `;
        articleContainer.appendChild(articleElement);
    });
}
