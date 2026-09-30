const fetchData = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json();

    const finalData = data.map((user) => {
        return `
        <div>
        <p>${user.title}</p>

        </div>
        
        `;
    })

    document.getElementById("demo").innerHTML=finalData;
}

fetchData();