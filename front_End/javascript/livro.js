
            //GET ALL
            const url = "http://localhost:3000/api/livros/";

            async function getAllLivros() {
                
                const response = await fetch(url);
                console.log(response);
                const data = await response.json();
                console.log(data);
                //loadingElement.classList.add("hide");


                const postsBody = document.querySelector("#posts-body");
                const postsHeader = document.querySelector("#posts-header");

                   const table = document.createElement("table");
                   const thead = document.createElement("thead");
                   const tr = document.createElement("tr");
                   const th = document.createElement("th");
                   const id = document.createElement("th");
                   const titulo = document.createElement("th");
                   const autor = document.createElement("th");
                   const editora = document.createElement("th");
                   //const capa = document.createElement("th");  

                   id.innerHTML = "ID DO LIVRO";
                   titulo.innerHTML = "NOME DO LIVRO";
                   autor.innerHTML = "AUTOR DO LIVRO";
                   editora.innerHTML = "EDITORA DO LIVRO";
                   
                   table.appendChild(thead);
                   thead.appendChild(tr);
                   tr.appendChild(th);
                   thead.appendChild(id);
                   thead.appendChild(titulo);
                   thead.appendChild(autor);
                   thead.appendChild(editora);
                   postsHeader.appendChild(table);

                  data.map((post) => {
                    //Tabela cabeçalho e corpo
                    const tr = document.createElement("tr");
                                                         
                    //Body
                    const idLivro = document.createElement("td");
                    const nomeLivro = document.createElement("td");
                    const autorLivro = document.createElement("td");
                    const editoraLivro = document.createElement("td");
                    
                    idLivro.innerText = post.id_livro;
                    nomeLivro.innerText = post.nome_livro;
                    autorLivro.innerText = post.autor;
                    editoraLivro.innerText = post.editora;
                                        
                    //table.appendChild(tbody);
                    tr.appendChild(idLivro);
                    tr.appendChild(nomeLivro);
                    tr.appendChild(autorLivro);
                    tr.appendChild(editoraLivro);
                    
                    //postsBody.appendChild(table);
                    postsBody.appendChild(tr);

                    //const valorId = table.appendChild(idLivro);
                    //const valornome = table.appendChild(nomeLivro);
                    //console.log(valorId);
                    //console.log(valornome);

                    
                  });
            }

            getAllLivros();
