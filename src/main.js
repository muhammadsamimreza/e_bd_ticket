
        // Get references to the input fields and the swap button
        const fromInput = document.querySelector('#location1');
        const toInput = document.querySelector('#location2');
        const swapButton = document.querySelector('#swapButton');


        // Add event listener to the swap button
        swapButton.addEventListener('click', () => {

            // Swap the values of the input fields
            const temp = fromInput.value;
            fromInput.value = toInput.value;
            toInput.value = temp;

        });


       

        function searchData() {
            var location1 = document.getElementById('location1').value;
            var location2 = document.getElementById('location2').value;
            var date = document.getElementById('date').value;

            var searchData = location1 + location2 + date.replaceAll('-', '');

            var loader = document.getElementById('loader');
            var searchResult = document.getElementById('searchResult');

            loader.style.display = 'block';
            searchResult.style.display = 'none';

            setTimeout(function () {
                loader.style.display = 'none';
                var resultData = searchDataInDatabase(searchData);
                if (resultData.length > 0) {
                    searchResult.innerHTML = `<h3>Available Buses for ${location1} to ${location2} on ${date} </h3><ul>`;
                    resultData.forEach(function (item) {
                        searchResult.innerHTML += '<li>' + item + '</li>';
                    });
                    searchResult.innerHTML += '</ul>';
                } else {
                    searchResult.innerHTML = 'Data not found for ' + `${location1} to ${location2} on ${date} `;
                }
                searchResult.style.display = 'block';
            }, 2000); // Showing loader for 2 seconds before displaying the search result
        }

        // Function to search data in the database
        function searchDataInDatabase(searchData) {
            var matchingData = [];
            database.forEach(function (entry) {
                if (entry.key.includes(searchData)) {
                    matchingData.push(entry.data);
                }
            });
            return matchingData;
        }

        document.getElementById("date").min = new Date().toISOString().split('T')[0];
        document.getElementById("input4").min = new Date().toISOString().split('T')[0];


        var data = ['Dhaka', 'Rajshahi']; // Your data array

        function setData() {
            document.getElementById('location1').value = data[0];
            document.getElementById('location2').value = data[1];
        }

        var data2 = ['Dhaka', 'Barishal']; // Your data array

        function setData2() {
            document.getElementById('location1').value = data2[0];
            document.getElementById('location2').value = data2[1];
        }


        var data3 = ['Dhaka', 'Coxs-Bazar']; // Your data array

        function setData3() {
            document.getElementById('location1').value = data3[0];
            document.getElementById('location2').value = data3[1];
        }

        var data4 = ['Dhaka', 'Chittagong']; // Your data array

        function setData4() {
            document.getElementById('location1').value = data4[0];
            document.getElementById('location2').value = data4[1];
        }

        var data5 = ['Dhaka', 'Chapainawabganj']; // Your data array

        function setData5() {
            document.getElementById('location1').value = data5[0];
            document.getElementById('location2').value = data5[1];
        }
    