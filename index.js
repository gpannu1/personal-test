window.onload = function() {

    //DATA for Select Elements
    var whoSelectArray = ["artist", "designer", "researcher"];
    whoSelectArray = shuffle(whoSelectArray);
    whoSelectArray.unshift("who", "-");

    var studySelectArray = ["ceramics", "architecture", "web design", "graphic design", "memory", "curation", "archives", "artivism"];
    studySelectArray = shuffle(studySelectArray);
    studySelectArray.unshift("study", "-");

    var workSelectArray = ["clay", "buildings", "internet", "professors", "students", "artists", "museums"];
    workSelectArray = shuffle(workSelectArray);
    workSelectArray.unshift("work", "-");

    var makeSelectArray = ["explores", "inspires" , "recontextualises", "interpolates", "educates", "questions", "operates within", "elevates"];
    makeSelectArray = shuffle(makeSelectArray);
    makeSelectArray.unshift("make", "-");

    var thatSelectArray = ["intersection", "relationship", "boundaries", "interplay", "discourse", "potentiality", "polarity"];
    thatSelectArray = shuffle(thatSelectArray);
    thatSelectArray.unshift("that", "-");

    var betweenSelectArray = ["clay", "objects", "space", "2d design", "borders", "galleries"];
    betweenSelectArray = shuffle(betweenSelectArray);
    betweenSelectArray.unshift("between", "-");

    var andSelectArray = ["photography", "materiality", "climate change", "temporality", "popularity", "social media", "trauma"];
    andSelectArray = shuffle(andSelectArray);
    andSelectArray.unshift("and", "-");

    appendToSelect(whoSelectArray[0], whoSelectArray);
    appendToSelect(studySelectArray[0], studySelectArray);
    appendToSelect(workSelectArray[0], workSelectArray);
    appendToSelect(makeSelectArray[0], makeSelectArray);
    appendToSelect(thatSelectArray[0], thatSelectArray);
    appendToSelect(betweenSelectArray[0], betweenSelectArray);
    appendToSelect(andSelectArray[0], andSelectArray);

    
    // add OPTIONS from AN ARRAY to a SELECT ELEMENT
    function appendToSelect(selectName, selectArray) {
        selectElement = document.getElementById(selectName + "-select"); //id = who-select -- id should always be preceeded by "-select"
        for (var i=1; i<selectArray.length; i++) {
            var optionElement = document.createElement('option');
            optionElement.value= selectArray[i];
            optionElement.innerHTML = selectArray[i];
            selectElement.appendChild(optionElement);
        }
    }


    //to SHUFFLE an ARRAY
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }



    var sq_1 = {
      vartitle: "sq_1",
      title: "istanbulay",
      categories: ["artists", "archives", "professors"],
      description: "description description description",
      imgurl: "photos/img.png"
    };

    var sq_2 = {
      vartitle: "sq_2",
      title: "paris",
      categories: ["designer", "curation"],
      description: "description paris paris paris description",
      imgurl: "photos/img.png"
    };

    var sq_3 = {
      vartitle: "sq_3",
      title: "paris",
      categories: ["designer", "curation"],
      description: "description paris paris paris description",
      imgurl: "photos/img.png"
    };

    var sq_4 = {
      vartitle: "sq_4",
      title: "paris",
      categories: ["borders"],
      description: "description paris paris paris description",
      imgurl: "photos/img.png"
    };

    var sq_array = [sq_1, sq_2, sq_3, sq_4];
    var childClassArray = ["sq-target", "sq-overlay"]

    createSqDiv("sq-container", childClassArray, sq_array);

    function createSqDiv(parentID, childClasses, sqarray) {
      var parent = document.getElementById(parentID);
      var loopCount = 1;
      for (const sq of sqarray) {
        
        var child = document.createElement("div");
        for ( const childClass of childClasses) {
          child.classList.add(childClass)
        }

        //assign values
        child.setAttribute("id", "sq_"+loopCount);
        child.style.backgroundImage = "url("+sq["imgurl"]+")";
        child.style.backgroundSize = "cover";
        
        parent.appendChild(child);
        loopCount++;

    }
  }

  

    function ifArrayIncludesArray(small, big) {
      for (var i = 0; i < small.length; i++) {
        if (big.includes(small[i])) {
          return true;
        }
      }
      return false;
    }

    
    document.addEventListener("mousemove", function() {
      var selectCollection = document.getElementsByTagName("select");
      var selectValueArray = [];
      for (var i = 0; i < selectCollection.length; i++) {
        selectValueArray.push(selectCollection[i].value);
      }

      for (var i=0; i<sq_array.length; i++) {

        // alert(selectValueArray+"0000"+sq_array[i].categories);

        var sqElement = document.getElementById(sq_array[i].vartitle);
        if (!ifArrayIncludesArray(selectValueArray, sq_array[i].categories)) {
          
          sqElement.classList.remove("sq-overlay");
          sqElement.classList.add("sq-overlay-redout");
        }
        else {
          sqElement.classList.remove("sq-overlay-redout");
          sqElement.classList.add("sq-overlay");

        }
        
      }
      //ifArrayIncludesArray(selectValueArray, sq_1.categories));  
    });
    
    
      


    // document.addEventListener("mousemove", function(event) {
    //     var cursor = document.querySelector(".custom-cursor");
    //     var mouseX = event.clientX;
    //     var mouseY = event.clientY;
    //     //alert(mouseY);
    //     cursor.style.top = mouseY + "px";
    //     cursor.style.left = mouseX + "px";

    //     //alert("should shift to " + mouseY);
    // });


    // document.addEventListener("DOMContentLoaded", function(event) {
    //     var cursor = document.querySelector(".custom-cursor");
    //     alert(cursor);
        
    //     window.onmousemove = function(e) {
    //       var mouseX = e.clientX;
    //       var mouseY = e.clientY;
    //       cursor.style.top = mouseY + "px";
    //       cursor.style.left = mouseX + "px";
    //   };
    // });
}