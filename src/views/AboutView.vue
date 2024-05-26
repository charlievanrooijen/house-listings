<template>
    <div class="about">
        <div class="container bg-transparent">
            <div class="text-left">
            </div>
            <div class="text-center">

                <h1 class="animated-text-righttoleft mt-5">About DTT Development</h1><br>

                <h2 class="animated-text-lefttoright mb-5">Overview</h2>
                <p>The House Listings Application is a web-based platform that allows users to view, create,
                    edit, and delete house listings. Built with Vue.js, it offers a user-friendly interface for managing
                    house details, including price, bedrooms, bathrooms, size, location, construction year, and more.
                    The application utilizes animations and CSS styling to enhance the user experience, including a
                    typing animation for text on the home page.</p>
            </div>
            <h2>Features</h2>
            <ul class="features-list text-start">
                <li>
                    <h3>Home Page</h3>
                    <ul>
                        <li><strong>Welcome Animation:</strong> The home page features a typing animation that
                            introduces the developer, creating a dynamic and engaging first impression.</li>
                        <li><strong>Developer Info:</strong> Displays information about the developer, Charlie van
                            Rooijen.</li>
                    </ul>
                </li>
                <li>
                    <h3>House Listings</h3>
                    <ul>
                        <li><strong>List View:</strong> Displays a list of all house listings with details such as
                            image, price, address, and size.</li>
                        <li><strong>Sorting and Filtering:</strong> Users can sort the listings by various criteria
                            (price, street name, size) and search by address.</li>
                        <li><strong>Detail View:</strong> Provides a detailed view of each house listing, including all
                            relevant information and an option to edit or delete the listing if created by the user.
                        </li>
                    </ul>
                </li>
                <li>
                    <h3>House Management</h3>
                    <ul>
                        <li><strong>Create Listing:</strong> Users can add new house listings by filling out a form with
                            all necessary details.</li>
                        <li><strong>Edit Listing:</strong> Users can edit existing listings. The form fields are
                            pre-populated with the current details of the house, making it easy to update information.
                        </li>
                        <li><strong>Delete Listing:</strong> Users can delete listings with a confirmation prompt to
                            prevent accidental deletions.</li>
                    </ul>
                </li>
                <li>
                    <h3>User Authentication</h3>
                    <ul>
                        <li><strong>Login/Logout:</strong> Basic login functionality allows users to log in and out. The
                            login status is reflected in the navigation bar.</li>
                    </ul>
                </li>
                <li>
                    <h3>Responsive Design</h3>
                    <ul>
                        <li><strong>Mobile-Friendly Navigation:</strong> The navigation bar is designed to be
                            responsive, ensuring usability on both desktop and mobile devices.</li>
                    </ul>
                </li>
            </ul>

            <h2>Technologies Used</h2>
            <ul class="tech-list text-start">
                <li><strong>Vue.js:</strong> A progressive JavaScript framework for building user interfaces.</li>
                <li><strong>Vue Router:</strong> For managing application navigation.</li>
                <li><strong>Axios:</strong> For making HTTP requests to the backend API.</li>
                <li><strong>Bootstrap:</strong> For responsive design and pre-built UI components.</li>
                <li><strong>Font Awesome:</strong> For icons used in the navigation and other parts of the application.
                </li>
                <li><strong>SCSS:</strong> For styling the application, including animations and layout adjustments.
                </li>
            </ul>

            <h2>Animations and Styling</h2>
            <ul class="tech-list text-start">
                <li><strong>Typing Animation:</strong> Implemented on the home page to provide an engaging introduction.
                </li>
                <li><strong>Fade-in and Movement Animations:</strong> Used to enhance the visibility of text and
                    elements as they appear on the screen.</li>
                <li><strong>Responsive Layout:</strong> Ensures the application is usable and visually appealing on
                    different devices and screen sizes.</li>
            </ul>

            <h2>API Integration</h2>
            <ul class="tech-list text-start">
                <p>The application interacts with a backend API (<a
                        href="https://api.intern.d-tt.nl/api/houses">https://api.intern.d-tt.nl/api/houses</a>) to
                    manage house listings. All CRUD (Create, Read, Update, Delete) operations are performed through API
                    requests, with the appropriate API key included in the headers.</p>
            </ul>

            <h1 class="text-dark mt-5">Design and Delvelopment</h1>
            <div class="row mb-5 pt-5">
                <div class="image-container my-2 col-4">
                    <img class="w-100" src="../assets/images/img_logo_dtt@3x.png">
                </div>
                <div class="col-8 d-flex align-items-center">
                    <div class="row">
                        <div class="col-12">
                            <h3>
                                By DTT
                            </h3>
                        </div>
                        <div>
                            <h3 class="col-12">
                                <a href="www.d-tt.nl">www.d-tt.nl</a>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>


            <h1>About the developer</h1><br>
            <h2>Charlie van Rooijen </h2>
            <p class="tech-list">
                This is my first time working in VueJS
            </p>
            <p class="tech-list">
                I am a dedicated and versatile software developer with experience in both front-end and back-end
                development. My career includes working on a VR game at 360Fashion, enhancing CMS functionality at
                Garden Connect, and gaining integration consultancy expertise at Devoteam. Additionally, I have
                contributed to various projects at 4BIS Innovations and handled PHP development at Winst uit je Woning.
                My educational background from Codam Coding College and Nova College has equipped me with a strong
                foundation in software engineering, game design, and development.
            </p>
        </div>
    </div>

</template>

<style src="../assets/styles/aboutview/About.scss" lang="scss"></style>