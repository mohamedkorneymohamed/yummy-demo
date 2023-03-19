                            "use strict"
let rowOfdata=document.getElementById('rowOfdata')
let rName;
let rAge;
let rEmail;
let rPhone;
let rPassword;
let rRpassword;
// ----------------------------------------------loadingScreen---------------------------
$(document).ready(function(){
    $('.spinner').fadeOut(1000,function(){
        $('#spinner').fadeOut(1000,function(){
        $('body').css('overflow','auto')
        getSearch('a')
        })
    })
    })

// ----------------------------------------------sideNav-----------------------------------
    let sibdeNavInnnerWidth = $('.sideNav').innerWidth()
    $('.navTab').css('left' , -sibdeNavInnnerWidth)
    
$('.openCloseNav i').click(function(){
    let sibdeNavInnnerWidth = $('.sideNav').innerWidth()
if($('.navTab').css('left')=='0px'){
    $('.navTab').animate({left:-sibdeNavInnnerWidth} , 300)
    $('.openCloseNav i').removeClass('fa-xmark').addClass('open-close-icon');
    $(".navLinks li").animate({
        top: 300
    }, 500)
}
else{
    $('.navTab').animate({left:'0px'} , 300)
    $('.openCloseNav i').removeClass('open-close-icon').addClass('fa-xmark');

    for (let i = 0; i < 5; i++) {
    
        $(".navLinks li").eq(i).animate({
            top: (i + 1) * 40
        }, (i + 5) * 150)
    }
}
    })
    // ----------------------------------------------Search Us-----------------------------------
    function search(){
        $('#rowOfdata').html('')
        $('#spinner').fadeIn(500,function(){
            $('.spinner').fadeIn(500,function(){
            $('body').css('overflow','auto')
            })
        })
        let sibdeNavInnnerWidth = $('.sideNav').innerWidth()
        $('.navTab').css('left' , -sibdeNavInnnerWidth)
            $('.openCloseNav i').removeClass('fa-xmark').addClass('open-close-icon');

        let input = "";
            input +=`
            <div class="col-md-12">
            <div class="container w-75" id="searchContainer">
            <div class="row py-4 ">
                <div class="col-md-6 ">
                    <input onkeyup="getSearch(this.value)" class="form-control bg-transparent text-white" type="text" placeholder="Search By Name">
                </div>
                <div class="col-md-6">
                    <input onkeyup="getSearchLetter(this.value)" maxlength="1" class="form-control bg-transparent text-white" type="text" placeholder="Search By First Letter">
                </div>
            </div></div>
        </div>
            `
            $('#searchContainer').html(input)
            $('.spinner').fadeOut(1000,function(){
                $('#spinner').fadeOut(1000,function(){
                $('body').css('overflow','auto')
                })
            })
        }
        $('.navLinks li').eq(0).click(function(){
            search()  
        })
        // -----------------------------------------Search By Name----------------------------------------------------
        function displaySearchName(arr){
            let content = "";
            for(let i = 0 ; i< arr.length ; i++){
                content +=`
                <div class="col-md-3">
                    <div class="dataMeal rounded-5 overflow-hidden position-relative text-center" onclick="getDetails('${arr[i].strCategory}')">
                        <img src="${arr[i].strMealThumb}" alt="" class="w-100">
                        <div class="detailsOfMeal position-absolute " >
                        <h3>${arr[i].strCategory}</h3>
                        </div>
                </div>
            </div>
                `
            }
            $('.spinner').fadeOut(1000,function(){
                $('#spinner').fadeOut(1000,function(){
                $('body').css('overflow','auto')
                })
            })
            $('#rowOfdata').html(content)
            

            }
        async function getSearch(name){

            let sibdeNavInnnerWidth = $('.sideNav').innerWidth()
            $('.navTab').css('left' , -sibdeNavInnnerWidth)
                $('.openCloseNav i').removeClass('fa-xmark').addClass('open-close-icon');

                    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
            response = await response.json()
            displaySearchName(response.meals)
            

        }

    // ----------------------------------------------Search By first letter-----------------------------------
    function displaySearchLetter(arr){
        let content = "";
        for(let i = 0 ; i< arr.length ; i++){
            content +=`
            <div class="col-md-3">
                <div class="dataMeal rounded-5 overflow-hidden position-relative text-center" onclick="getDetails('${arr[i].strCategory}')">
                    <img src="${arr[i].strMealThumb}" alt="" class="w-100">
                    <div class="detailsOfMeal position-absolute " >
                    <h3>${arr[i].strCategory}</h3>
                    </div>
            </div>
        </div>
            `
        }
        $('.spinner').fadeOut(1000,function(){
            $('#spinner').fadeOut(1000,function(){
            $('body').css('overflow','auto')
            })
        })
        $('#rowOfdata').html(content)
        

        }
    async function getSearchLetter(letter){

        let sibdeNavInnnerWidth = $('.sideNav').innerWidth()
        $('.navTab').css('left' , -sibdeNavInnnerWidth)
            $('.openCloseNav i').removeClass('fa-xmark').addClass('open-close-icon');

                let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        response = await response.json()
        displaySearchLetter(response.meals)
        

    }
    // ----------------------------------------------displayAllData-----------------------------------
    function displayAllData(arr){
        let content = "";
        for(let i = 0 ; i< arr.length ; i++){
            content +=`
            <div class="col-md-3">
                <div class="dataMeal rounded-5 overflow-hidden position-relative text-center" onclick="getDetails('${arr[i].strCategory}')">
                    <img src="${arr[i].strCategoryThumb}" alt="" class="w-100">
                    <div class="detailsOfMeal position-absolute " >
                    <h3>${arr[i].strCategory}</h3>
                    <p id='dda'>${arr[i].strCategoryDescription}</p>
                    </div>
            </div>
        </div>
            `
        }
        $('#searchContainer').html('')
        $('#rowOfdata').html(content)
        
        }

 // ----------------------------------------------category-----------------------------------
    async function getCategories(){
        $('#spinner').fadeIn(500,function(){
            $('.spinner').fadeIn(500,function(){
            $('body').css('overflow','auto')
            })
        })
        let sibdeNavInnnerWidth = $('.sideNav').innerWidth()
        $('.navTab').css('left' , -sibdeNavInnnerWidth)
            $('.openCloseNav i').removeClass('fa-xmark').addClass('open-close-icon');

            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        response = await response.json()
          displayAllData(response.categories)
          $('.spinner').fadeOut(1000,function(){
            $('#spinner').fadeOut(1000,function(){
            $('body').css('overflow','auto')
            })
        })
    }
$('.navLinks li').eq(1).click(function(){
    getCategories()  
})
 // ----------------------------------------------detailsCategory-----------------------------------
 function displayDetails(arr){
    let content = "";
    for(let i = 0 ; i< arr.length ; i++){
        content +=`
        <div class="col-md-3">
            <div class="dataMeal rounded-5 overflow-hidden position-relative text-center" onclick="getDetailsOfMeals(${arr[i].idMeal})">
                <img src="${arr[i].strMealThumb}" alt="" class="w-100">
                <div class="detailsOfMeal position-absolute " >
                <h3>${arr[i].strMeal}</h3>
                </div>
        </div>
    </div>
        `
    }
    $('#searchContainer').html('')
    $('#rowOfdata').html(content)
    
    }
 async function getDetails(details){
    $('#spinner').fadeIn(500,function(){
        $('.spinner').fadeIn(500,function(){
        $('body').css('overflow','auto')
        })
    })
    let sibdeNavInnnerWidth = $('.sideNav').innerWidth()
    $('.navTab').css('left' , -sibdeNavInnnerWidth)
        $('.openCloseNav i').removeClass('fa-xmark').addClass('open-close-icon');

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${details}`)
    response = await response.json()
    displayDetails(response.meals)
    $('.spinner').fadeOut(1000,function(){
        $('#spinner').fadeOut(1000,function(){
        $('body').css('overflow','auto')
        })
    })

}
 // ----------------------------------------------detailsMeals-----------------------------------
 function displayDetailsOfMeals(arr){
    let content = "";
    for(let i = 0 ; i< arr.length ; i++){
        let x = `${arr[i].strTags}`
        content +=`
        <div class="container text-white">
        <div class="row py-5 g-4 " id="rowData">
<div class="col-md-4">
            <img class="w-100 rounded-3" src="${arr[i].strMealThumb}" alt="">
                <h2>${arr[i].strMeal}</h2>
        </div>
        <div class="col-md-8">
            <h2>Instructions</h2>
            <p>${arr[i].strInstructions}</p>
            <h3><span class="fw-bolder">Area : </span>${arr[i].strArea}</h3>
            <h3><span class="fw-bolder">Category : </span>${arr[i].strCategory}</h3>
            <h3>Recipes :</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
                <li class="alert alert-info m-2 p-1">${arr[i].strMeasure1}${arr[i].strIngredient1}</li>
                <li class="alert alert-info m-2 p-1">${arr[i].strMeasure2}${arr[i].strIngredient2}</li>
                <li class="alert alert-info m-2 p-1">${arr[i].strMeasure3}${arr[i].strIngredient3}</li>
                <li class="alert alert-info m-2 p-1">${arr[i].strMeasure4}${arr[i].strIngredient4}</li>
                <li class="alert alert-info m-2 p-1">${arr[i].strMeasure5}${arr[i].strIngredient5}</li>
                <li class="alert alert-info m-2 p-1">${arr[i].strMeasure6}${arr[i].strIngredient6}</li>
                <li class="alert alert-info m-2 p-1">${arr[i].strMeasure7}${arr[i].strIngredient7}</li>
                <li class="alert alert-info m-2 p-1">${arr[i].strMeasure8}${arr[i].strIngredient8}</li>
                <li class="alert alert-info m-2 p-1">${arr[i].strMeasure9}${arr[i].strIngredient9}</li>
                <li class="alert alert-info m-2 p-1">${arr[i].strMeasure10}${arr[i].strIngredient10}</li>
                <li class="alert alert-info m-2 p-1">${arr[i].strMeasure11}${arr[i].strIngredient11}</li>
                <li class="alert alert-info m-2 p-1">${arr[i].strMeasure12}${arr[i].strIngredient12}</li>
                <li class="alert alert-info m-2 p-1">${arr[i].strMeasure13}${arr[i].strIngredient13}</li>
                <li class="alert alert-info m-2 p-1">${arr[i].strMeasure13}${arr[i].strIngredient13}</li>
                <li class="alert alert-info m-2 p-1">${arr[i].strMeasure14}${arr[i].strIngredient14}</li>
            </ul>

            <h3>Tags :</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
                
    <li class="alert alert-danger m-2 p-1">${x.slice(0,4)}</li>
    <li class="alert alert-danger m-2 p-1">${x.slice(5)}</li>
            </ul>

            <a target="_blank" href="${arr[i].strSource}" class="btn btn-success">Source</a>
            <a target="_blank" href="${arr[i].strYoutube}" class="btn btn-danger">Youtube</a>
        </div></div>
    </div>
        `
    }
    $('#searchContainer').html('')
    $('#rowOfdata').html(content)
   

    }
 async function getDetailsOfMeals(details){
    $('#spinner').fadeIn(500,function(){
        $('.spinner').fadeIn(500,function(){
        $('body').css('overflow','auto')
        })
    })
    let sibdeNavInnnerWidth = $('.sideNav').innerWidth()
    $('.navTab').css('left' , -sibdeNavInnnerWidth)
        $('.openCloseNav i').removeClass('fa-xmark').addClass('open-close-icon');
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${details}`)
    response = await response.json()
    displayDetailsOfMeals(response.meals)
    $('.spinner').fadeOut(1000,function(){
        $('#spinner').fadeOut(1000,function(){
        $('body').css('overflow','auto')
        })
    })

}

 // ----------------------------------------------Area-----------------------------------------------------
 function displayArea(arr){
    let content = "";
    for(let i = 0 ; i< arr.length ; i++){
        content +=`
        <div class="col-md-3">
            <div class="dataMeal rounded-5 overflow-hidden position-relative text-center  " id='containerOfArea'onclick="getAreaDetails('${arr[i].strArea}')">
                <i class="fa-solid fa-street-view fa-3x"></i>
                <h3 id='area'>${arr[i].strArea}</h3>
            </div>
        </div>
        `
    }
    

$('#searchContainer').html('') ;
   rowOfdata.innerHTML=content
    }

 async function getArea(){
    $('#spinner').fadeIn(500,function(){
        $('.spinner').fadeIn(500,function(){
        $('body').css('overflow','auto')
        })
    })
    let sibdeNavInnnerWidth = $('.sideNav').innerWidth()
    $('.navTab').css('left' , -sibdeNavInnnerWidth)
        $('.openCloseNav i').removeClass('fa-xmark').addClass('open-close-icon');

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    response = await response.json()
    displayArea(response.meals)
    $('.spinner').fadeOut(1000,function(){
        $('#spinner').fadeOut(1000,function(){
        $('body').css('overflow','auto')
        })
    })

}
$('.navLinks li').eq(2).click(function(){
    getArea()  
})
 // ----------------------------------------------areaDetails-----------------------------------
 function displayAreaDetails(arr){
    let content = "";
    for(let i = 0 ; i< arr.length ; i++){
        content +=`
        <div class="col-md-3">
            <div class="dataMeal rounded-5 overflow-hidden position-relative text-center" onclick="getDetailsOfMeals(${arr[i].idMeal})">
                <img src="${arr[i].strMealThumb}" alt="" class="w-100">
                <div class="detailsOfMeal position-absolute " >
                <h3>${arr[i].strMeal}</h3>
                </div>
        </div>
    </div>
        `
    }
    

$('#searchContainer').html('')  ;
  rowOfdata.innerHTML=content
    }

 async function getAreaDetails(details){
    $('#spinner').fadeIn(500,function(){
        $('.spinner').fadeIn(500,function(){
        $('body').css('overflow','auto')
        })
    })
    let sibdeNavInnnerWidth = $('.sideNav').innerWidth()
    $('.navTab').css('left' , -sibdeNavInnnerWidth)
        $('.openCloseNav i').removeClass('fa-xmark').addClass('open-close-icon');

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${details}`)
    response = await response.json()
    displayAreaDetails(response.meals)
    $('.spinner').fadeOut(1000,function(){
        $('#spinner').fadeOut(1000,function(){
        $('body').css('overflow','auto')
        })
    })

}

 // ----------------------------------------------Ingredients-----------------------------------
 function displayIngredients(arr){
    let content = "";
    for(let i = 0 ; i< arr.length ; i++){
        content +=`
        <div class="col-md-3">
            <div class="dataMeal rounded-5 overflow-hidden position-relative text-center  " id='containerOfArea'onclick="getIngredientsDetails('${arr[i].strIngredient}')">
            <i class="fa-solid fa-bowl-rice fa-3x"></i>
            <h3 id='area'>${arr[i].strIngredient}</h3>
        </div>
    </div>
        `
    }
    

$('#searchContainer').html('')  
  rowOfdata.innerHTML=content
    }

 async function getIngredients(){
    $('#spinner').fadeIn(500,function(){
        $('.spinner').fadeIn(500,function(){
        $('body').css('overflow','auto')
        })
    })
    let sibdeNavInnnerWidth = $('.sideNav').innerWidth()
    $('.navTab').css('left' , -sibdeNavInnnerWidth)
        $('.openCloseNav i').removeClass('fa-xmark').addClass('open-close-icon');

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    response = await response.json()
    displayIngredients(response.meals)
    $('.spinner').fadeOut(1000,function(){
        $('#spinner').fadeOut(1000,function(){
        $('body').css('overflow','auto')
        })
    })

}
$('.navLinks li').eq(3).click(function(){
    getIngredients()  
})
 // ----------------------------------------------ingredientsDetails-----------------------------------
 function displayint(arr){
    let content = "";
    for(let i = 0 ; i< arr.length ; i++){
        content +=`
        <div class="col-md-3">
            <div class="dataMeal rounded-5 overflow-hidden position-relative text-center" onclick="getDetailsOfMeals(${arr[i].idMeal})">
                <img src="${arr[i].strMealThumb}" alt="" class="w-100">
                <div class="detailsOfMeal position-absolute " >
                <h3>${arr[i].strMeal}</h3>
                </div>
        </div>
    </div>
        `
    }   
    

$('#searchContainer').html('')  ;
  rowOfdata.innerHTML=content
    }

 async function getIngredientsDetails(details){
    $('#spinner').fadeIn(500,function(){
        $('.spinner').fadeIn(500,function(){
        $('body').css('overflow','auto')
        })
    })
    let sibdeNavInnnerWidth = $('.sideNav').innerWidth()
    $('.navTab').css('left' , -sibdeNavInnnerWidth)
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${details}`)
    response = await response.json()
   
    displayint(response.meals)
    $('.spinner').fadeOut(1000,function(){
        $('#spinner').fadeOut(1000,function(){
        $('body').css('overflow','auto')
        })
    })

}
 // ----------------------------------------------Contact Us-----------------------------------
 function showContacts(){

    $('#spinner').fadeIn(500,function(){
        $('.spinner').fadeIn(500,function(){
        $('body').css('overflow','auto')
        })
    })
    let sibdeNavInnnerWidth = $('.sideNav').innerWidth()
    $('.navTab').css('left' , -sibdeNavInnnerWidth)
        $('.openCloseNav i').removeClass('fa-xmark').addClass('open-close-icon');

    let content = "";
        content +=`
        <div class="col-md-12">
        <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="nameInput" type="text" class="form-control" placeholder="Enter Your Name" onkeyup="nameValidation()">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
            </div>
            <div class="col-md-6">
                <input id="emailInput" type="email" class="form-control " placeholder="Enter Your Email" onkeyup="emailValidation()">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-md-6">
                <input id="phoneInput" type="text" class="form-control " placeholder="Enter Your Phone" onkeyup="phoneValidation()">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>
            <div class="col-md-6">
                <input id="ageInput" type="number" class="form-control " placeholder="Enter Your Age" onkeyup="ageValidation()">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-md-6">
                <input id="passwordInput" type="password" class="form-control " placeholder="Enter Your Password" onkeyup="passwordValidation()">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div>
            <div class="col-md-6">
                <input id="repasswordInput" type="password" class="form-control " placeholder="Repassword" onkeyup="repasswordValidation()">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>
            </div>
        </div>
        <button id="submitBtn" class="btn btn-outline-danger px-2 mt-3" disabled="true">Submit</button>
    </div>
    </div>
        
    `
    $('#searchContainer').html('')
        rowOfdata.innerHTML=content
        $('.spinner').fadeOut(1000,function(){
            $('#spinner').fadeOut(1000,function(){
            $('body').css('overflow','auto')
            })
        })
        
    }
    
    $('.navLinks li').eq(4).click(function(){
        showContacts()  


    })
     // ----------------------------------------------validation-----------------------------------
     function nameValidation() { 
        let regexName = /^[a-zA-Z ]+$/ig

        if($('#nameInput').val()==''){
            $('#submitBtn').attr("disabled", true)
            
        }else{
            if(regexName.test($('#nameInput').val())==true){
                $('#nameAlert').removeClass('d-block').addClass('d-none');
                rName=true
            }
            else{
                $('#nameAlert').removeClass('d-none').addClass('d-block');
                rName=false
            }
        }
        btnSubmit()
    }
    function emailValidation() {
        let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ig
        if($('#emailInput').val()==''){
            $('#submitBtn').attr("disabled", true)
            
        }else{
            if(regexEmail.test($('#emailInput').val())==true){
                $('#emailAlert').removeClass('d-block').addClass('d-none');
                rEmail=true
            }
            else{
                $('#emailAlert').removeClass('d-none').addClass('d-block');
                rEmail=false
            }
        }
        btnSubmit()
    }
    
    function phoneValidation() {
        let regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ig
        if($('#phoneInput').val()==''){
            $('#submitBtn').attr("disabled", true)
            
        }else{
            if(regexPhone.test($('#phoneInput').val())==true){
                $('#phoneAlert').removeClass('d-block').addClass('d-none');
                rPhone=true
            }
            else{
                $('#phoneAlert').removeClass('d-none').addClass('d-block');
                rPhone=false
            }
        }
        btnSubmit()
        
    }
    
    function ageValidation() {
        let regexAge = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/ig
        if($('#ageInput').val()==''){
            $('#submitBtn').attr("disabled", true)
            
        }else{
            if(regexAge.test($('#ageInput').val())==true){
                $('#ageAlert').removeClass('d-block').addClass('d-none');
                rAge=true
            }
            else{
                $('#ageAlert').removeClass('d-none').addClass('d-block');
                rAge=false
            }
        }
        btnSubmit()
        
    }
    
    function passwordValidation() {
        let regexPassword =/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/ig
        if($('#passwordInput').val()==''){
            $('#submitBtn').attr("disabled", true)
            
        }else{
            if(regexPassword.test($('#passwordInput').val())==true){
                $('#passwordAlert').removeClass('d-block').addClass('d-none');
                rPassword=true
            }
            else{
                $('#passwordAlert').removeClass('d-none').addClass('d-block');
                rPassword=false
            }
        }
        btnSubmit()
        
    }
    
    function repasswordValidation() {

        if($('#repasswordInput').val()==''){
            $('#submitBtn').attr("disabled", true)
            
        }else{
            if($('#passwordInput').val()== $('#repasswordInput').val()){
                $('#repasswordAlert').removeClass('d-block').addClass('d-none')
                rRpassword=true
             }
             else{
                 $('#repasswordAlert').removeClass('d-none').addClass('d-block')
                 rRpassword=false
             }
        }
        btnSubmit()
        
    }
    function btnSubmit(){
        if(rName==true && rEmail==true &&rAge ==true && rPhone==true && rPassword==true && rRpassword==true){
            $('#submitBtn').removeAttr("disabled") 
                                                
        }else{
            $('#submitBtn').attr("disabled", true)
        }
    }

