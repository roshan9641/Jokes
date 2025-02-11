let apiBody = document.querySelector(".api_body");
        let apiUrl = "https://icanhazdadjoke.com/";
     
        fetchData = async()=>{
        try{
        let res = await fetch(apiUrl,{
            headers:{
                accept:"application/json",
            },
        });
      let data = await res.json();
       apiBody.innerText = data.joke;
    }catch(error){
        apiBody.innerText = `Error: ${error}`;
    }
      }
      fetchData();
        document.querySelector("#fetch_jokes").addEventListener("click", fetchData); 
    
