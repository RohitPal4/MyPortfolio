import React, { useState } from 'react'

function Products(props) {

    const projectbyoption = {
        "1": [
            {
                title: 'NewsApp',
                description: 'this is news app which provide daily news',
                imageUrl: '/assets/image1.jpg'
            },
    
            {
                title: 'TodoList',
                description: 'this is news app which provide daily news',
                imageUrl: '/assets/image2.jpg'
            },
            {
                title: 'Social Media Clone',
                description: 'this project only done for practice purpose',
                imageUrl: '/assets/image3.jpg'
            },
    
            {
                title: 'Hotel Booking',
                description: 'Hotel booking and cancelation analysis using python',
                imageUrl: '/assets/image4.jpg'
            }
        ],
        "2":[
            {
                title: 'Account Management System',
                description: 'this is for managing account of bank',
                imageUrl: '/assets/image1.jpg'
            },
    
            {
                title: 'Library Management System',
                description: 'this app Manage Library books',
                imageUrl: '/assets/image2.jpg'
            }
        ],
        "3": [
            {
                title: 'Movie Recomendation System',
                description: 'this is movie recomendation app which provide good movies for u',
                imageUrl: '/assets/image1.jpg'
            },
    
            {
                title: 'Hotel Booking',
                description: 'this is news app which provide daily news',
                imageUrl: '/assets/image2.jpg'
            }
        ]
    }

    const projects = projectbyoption[props.selectoption] || [];

    const [currentpage, setCurrentPage] = useState(0);
    const projectsperpage = 2;

    const totalPages = Math.ceil(projects.length / projectsperpage);

    const handleNext = () => {
        if (currentpage < totalPages - 1) {
            setCurrentPage(currentpage + 1);
        }
    };

    const handlePrev = () => {
        if (currentpage > 0) {
            setCurrentPage(currentpage - 1);
        }
    };

    const startIndex = currentpage * projectsperpage;
    const visibleProjects = projects.slice(startIndex, startIndex + projectsperpage);


    return (

        <div className="container text-center">
            <div className="row">
                {
                    visibleProjects.map((project, index) => {
                        return <div className="col" key={index}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <img src={project.imageUrl} alt="project" style={{border: '2px solid gray',
                                borderRadius: '40px'
                            }}  />
                        </div>
                    })
                }
            </div>
            <div className='container my-3 d-flex justify-content-between'>
                <button type='button' className="btn btn-dark" onClick={handlePrev} disabled={currentpage === 0}>&larr; Prev</button>
                <span>Page {currentpage + 1} of {totalPages}</span>
                <button type='button' className="btn btn-dark" onClick={handleNext} disabled={currentpage === totalPages - 1}>Next &rarr;</button>
            </div>
        </div>
    )
}

export default Products
