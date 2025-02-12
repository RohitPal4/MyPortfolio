import React from 'react';
import '../App.css';

function Skills() {
    return (
        <div className="container" style={{
            marginTop: "150px",
            marginBottom: '100px',

        }}>
            <h2>Skills</h2>
            <div className="row" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: '20px 70px'

            }}>
                <div className="col skills" style={{
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: "center",



                }}>
                    <div className="row" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: '50px'
                    }}>
                        <ul className='skillsimg'>
                            <h4>MERN Stack</h4>
                            <li className='img1'><img src='/assets/nodejsicon.png' alt="Node.js" /> Node.js</li>
                            <li className='img2'><img src='/assets/reacticon.png' alt="React" /> React</li>
                            <li className='img3'><img src='/assets/jsicon.png' alt="JavaScript" /> JavaScript</li>
                            <li className='img4'><img src='/assets/modbicon.png' alt="MongoDB" /> MongoDB</li>

                            <h4>Languages</h4>
                            <li className='img5'><img src='/assets/cppicon.png' alt="cpp" /> C++</li>
                            <li className='img6'><img src='/assets/cicon.png' alt="cpp" /> C</li>
                            <li className='img7'><img src='/assets/javaicon.png' alt="java" /> Java</li>
                            <li className='img8'><img src='/assets/jsicon.png' alt="cpp" /> JavaScript</li>
                            <li className='img9'><img src='/assets/pythonicon.png' alt="python" /> Python</li>
                        </ul>

                    </div>

                </div>
                <div className="col " style={{display: "flex",
                    alignItems: 'center',
                    justifyContent: 'center',}} >


                    <ul className='circle'>
                        <li className="imagebx mid">skills</li>

                        <li className='imagebx bx1'><img src='/assets/nodejsicon.png' alt="Node.js" /></li>
                        <li className='imagebx bx2' ><img src='/assets/reacticon.png' alt="React" /></li>
                        <li className='imagebx bx3'><img src='/assets/jsicon.png' alt="JavaScript" /></li>
                        <li className='imagebx bx4'><img src='/assets/modbicon.png' alt="MongoDB" /></li>
                        <li className='imagebx bx5'><img src='/assets/cppicon.png' alt="cpp" /></li>
                        <li className='imagebx bx6'><img src='/assets/cicon.png' alt="c" /></li>
                        <li className='imagebx bx7'><img src='/assets/javaicon.png' alt="java" /></li>
                        <li className='imagebx bx8'><img src='/assets/pythonicon.png' alt="python" /></li>
                    </ul>


                </div>
            </div>
        </div>
    );
}

export default Skills;

