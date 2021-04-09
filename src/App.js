import './assets/scss/index.css';
import image from './assets/images/pexels-emma-blackbourn-3789449.jpg';

function App() {
    return (
        <>
            <header className={"g-header"}>

                <div className={"o-container-p1 has-separator"}>
                    <a href="/">
                        <h3>Magic Fungi Blog</h3>
                    </a>
                </div>

                <div className={"o-container-padding-s"}>
                    <ul className={"o-ui-list o-ui-list--horizontal"}>
                        <li>
                            <button className={"a-btn a-btn--primary"}><p>Inicio</p></button>
                        </li>
                        <li>
                            <button className={"a-btn a-btn--primary"}><p>Comprar</p></button>
                        </li>
                        <li>
                            <button className={"a-btn a-btn--primary"}><p>Acerca de</p></button>
                        </li>
                        <li>
                            <button className={"a-btn a-btn--primary"}><p>Contacto</p></button>
                        </li>
                        <li>
                            <button className={"a-btn a-btn--primary"}><p>Foro</p></button>
                        </li>
                    </ul>

                </div>
            </header>

            <img className={"a-img-header"} src={image} alt=""/>
            <div className={"m-section-over-img"}>
                <h3 className={"a-title animate__animated animate__fadeInDown"}>Bienvenido mi pana</h3>
                <p className={"a-lead animate__animated animate__fadeInDown"}>
                    What is Lorem Ipsum? Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was pop
                </p>
            </div>

            <div className={"o-container-section"}>
                <div className={"o-container-center"}>
                    <div className={"o-container-sb"}>
                        <h3 className={"a-title-m"}>Todas las entradas</h3>
                        <input type="text" id="fname" name="fname"/>
                    </div>
                    <div className={"o-post-container"}>
                        <div className={"g-card-post is-box-shadow"}>
                            <img className={"a-img-post"} src={image} alt=""/>

                            <div className={"o-container-content-card"}>
                                <div className={"o-container-sb"}>
                                    <div className={"o-container-sb"}>
                                        <a className={"a-icon  a-icon-profile"} href="/"></a>
                                        <div className={"a-creation-inf"}>
                                            <p>Juan Sarabia Vidal 👑</p>
                                            <p>28 Marzo</p>
                                        </div>
                                    </div>
                                    <button className={"a-btn a-btn__card-post"}>+</button>
                                </div>
                                <div className={"a-title-card has-separator"}>
                                    <h4 className={"animate__animated animate__fadeInDown"}>
                                        <a href="">Las conversaciones
                                        </a>
                                    </h4>
                                </div>
                                <div className={"o-container-sb"}>
                                    {/*TODO agregar/crear molecula contenedora de los botones*/}
                                    <div><a className={"a-icon a-icon-eye"} href=""></a><p
                                        className={"a-title-gray"}>1</p>
                                    </div>
                                    <div><a className={"a-icon a-icon-message"} href=""></a><p
                                        className={"a-title-gray"}>1</p></div>
                                    <div><a className={"a-icon a-icon-heart"} href=""></a><p
                                        className={"a-title-gray"}>1</p></div>
                                    <div><a className={"a-icon a-icon-save"} href=""></a><p
                                        className={"a-title-gray"}>1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"g-card-post is-box-shadow"}>
                            <img className={"a-img-post"} src={image} alt=""/>

                            <div className={"o-container-content-card"}>
                                <div className={"o-container-sb"}>
                                    <div className={"o-container-sb"}>
                                        <a className={"a-logo-profile"} href="/"></a>
                                        <div className={"a-creation-inf"}>
                                            <p>Juan Sarabia Vidal 👑</p>
                                            <p>28 Marzo</p>
                                        </div>
                                    </div>
                                    <button className={"a-btn a-btn__card-post"}>+</button>
                                </div>
                                <div className={"a-title-card has-separator"}>
                                    <h4 className={"animate__animated animate__fadeInDown"}>
                                        <a href="">Las conversaciones medioambientales se reanudan tras un estancamiento
                                            de
                                            5 dasdasd
                                            asdasdas
                                        </a>
                                    </h4>
                                </div>
                                <div className={"o-container-sb"}>
                                    {/*TODO agregar/crear molecula contenedora de los botones*/}
                                    <div><a className={"a-icon a-icon-eye"} href=""></a><p
                                        className={"a-title-gray"}>1</p>
                                    </div>
                                    <div><a className={"a-icon a-icon-message"} href=""></a><p
                                        className={"a-title-gray"}>1</p></div>
                                    <div><a className={"a-icon a-icon-heart"} href=""></a><p
                                        className={"a-title-gray"}>1</p></div>
                                    <div><a className={"a-icon a-icon-save"} href=""></a><p
                                        className={"a-title-gray"}>1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"g-card-post is-box-shadow"}>
                            <img className={"a-img-post"} src={image} alt=""/>

                            <div className={"o-container-content-card"}>
                                <div className={"o-container-sb"}>
                                    <div className={"o-container-sb"}>
                                        <a className={"a-logo-profile"} href="/"></a>
                                        <div className={"a-creation-inf"}>
                                            <p>Juan Sarabia Vidal 👑</p>
                                            <p>28 Marzo</p>
                                        </div>
                                    </div>
                                    <button className={"a-btn a-btn__card-post"}>+</button>
                                </div>
                                <div className={"a-title-card has-separator"}>
                                    <h4 className={"animate__animated animate__fadeInDown"}>
                                        <a href="">Las conversaciones medioambientales se reanudan tras un estancamiento
                                            de
                                            5 dasdasd
                                            asdasdas
                                        </a>
                                    </h4>
                                </div>
                                <div className={"o-container-sb"}>
                                    {/*TODO agregar/crear molecula contenedora de los botones*/}
                                    <div><a className={"a-icon a-icon-eye"} href=""></a><p
                                        className={"a-title-gray"}>1</p>
                                    </div>
                                    <div><a className={"a-icon a-icon-message"} href=""></a><p
                                        className={"a-title-gray"}>1</p></div>
                                    <div><a className={"a-icon a-icon-heart"} href=""></a><p
                                        className={"a-title-gray"}>1</p></div>
                                    <div><a className={"a-icon a-icon-save"} href=""></a><p
                                        className={"a-title-gray"}>1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"g-card-post is-box-shadow"}>
                            <img className={"a-img-post"} src={image} alt=""/>

                            <div className={"o-container-content-card"}>
                                <div className={"o-container-sb"}>
                                    <div className={"o-container-sb"}>
                                        <a className={"a-logo-profile"} href="/"></a>
                                        <div className={"a-creation-inf"}>
                                            <p>Juan Sarabia Vidal 👑</p>
                                            <p>28 Marzo</p>
                                        </div>
                                    </div>
                                    <button className={"a-btn a-btn__card-post"}>+</button>
                                </div>
                                <div className={"a-title-card has-separator"}>
                                    <h4 className={"animate__animated animate__fadeInDown"}>
                                        <a href="">Las conversaciones medioambientales se reanudan tras un estancamiento
                                            de
                                            5 dasdasd
                                            asdasdas
                                        </a>
                                    </h4>
                                </div>
                                <div className={"o-container-sb"}>
                                    {/*TODO agregar/crear molecula contenedora de los botones*/}
                                    <div><a className={"a-icon a-icon-eye"} href=""></a><p
                                        className={"a-title-gray"}>1</p>
                                    </div>
                                    <div><a className={"a-icon a-icon-message"} href=""></a><p
                                        className={"a-title-gray"}>1</p></div>
                                    <div><a className={"a-icon a-icon-heart"} href=""></a><p
                                        className={"a-title-gray"}>1</p></div>
                                    <div><a className={"a-icon a-icon-save"} href=""></a><p
                                        className={"a-title-gray"}>1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"g-card-post is-box-shadow"}>
                            <img className={"a-img-post"} src={image} alt=""/>

                            <div className={"o-container-content-card"}>
                                <div className={"o-container-sb"}>
                                    <div className={"o-container-sb"}>
                                        <a className={"a-logo-profile"} href="/"></a>
                                        <div className={"a-creation-inf"}>
                                            <p>Juan Sarabia Vidal 👑</p>
                                            <p>28 Marzo</p>
                                        </div>
                                    </div>
                                    <button className={"a-btn a-btn__card-post"}>+</button>
                                </div>
                                <div className={"a-title-card has-separator"}>
                                    <h4 className={"animate__animated animate__fadeInDown"}>
                                        <a href="">Las conversaciones medioambientales se reanudan tras un estancamiento
                                            de
                                            5 dasdasd
                                            asdasdas
                                        </a>
                                    </h4>
                                </div>
                                <div className={"o-container-sb"}>
                                    {/*TODO agregar/crear molecula contenedora de los botones*/}
                                    <div><a className={"a-icon a-icon-eye"} href=""></a><p
                                        className={"a-title-gray"}>1</p>
                                    </div>
                                    <div><a className={"a-icon a-icon-message"} href=""></a><p
                                        className={"a-title-gray"}>1</p></div>
                                    <div><a className={"a-icon a-icon-heart"} href=""></a><p
                                        className={"a-title-gray"}>1</p></div>
                                    <div><a className={"a-icon a-icon-save"} href=""></a><p
                                        className={"a-title-gray"}>1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"g-card-post is-box-shadow"}>
                            <img className={"a-img-post"} src={image} alt=""/>

                            <div className={"o-container-content-card"}>
                                <div className={"o-container-sb"}>
                                    <div className={"o-container-sb"}>
                                        <a className={"a-logo-profile"} href="/"></a>
                                        <div className={"a-creation-inf"}>
                                            <p>Juan Sarabia Vidal 👑</p>
                                            <p>28 Marzo</p>
                                        </div>
                                    </div>
                                    <button className={"a-btn a-btn__card-post"}>+</button>
                                </div>
                                <div className={"a-title-card has-separator"}>
                                    <h4 className={"animate__animated animate__fadeInDown"}>
                                        <a href="">Las conversaciones medioambientales se reanudan tras un estancamiento
                                            de
                                            5 dasdasd
                                            asdasdas
                                        </a>
                                    </h4>
                                </div>
                                <div className={"o-container-sb"}>
                                    {/*TODO agregar/crear molecula contenedora de los botones*/}
                                    <div><a className={"a-icon a-icon-eye"} href=""></a><p
                                        className={"a-title-gray"}>1</p>
                                    </div>
                                    <div><a className={"a-icon a-icon-message"} href=""></a><p
                                        className={"a-title-gray"}>1</p></div>
                                    <div><a className={"a-icon a-icon-heart"} href=""></a><p
                                        className={"a-title-gray"}>1</p></div>
                                    <div><a className={"a-icon a-icon-save"} href=""></a><p
                                        className={"a-title-gray"}>1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"g-card-post is-box-shadow"}>
                            <img className={"a-img-post"} src={image} alt=""/>

                            <div className={"o-container-content-card"}>
                                <div className={"o-container-sb"}>
                                    <div className={"o-container-sb"}>
                                        <a className={"a-logo-profile"} href="/"></a>
                                        <div className={"a-creation-inf"}>
                                            <p>Juan Sarabia Vidal 👑</p>
                                            <p>28 Marzo</p>
                                        </div>
                                    </div>
                                    <button className={"a-btn a-btn__card-post"}>+</button>
                                </div>
                                <div className={"a-title-card has-separator"}>
                                    <h4 className={"animate__animated animate__fadeInDown"}>
                                        <a href="">Las conversaciones medioambientales se reanudan tras un estancamiento
                                            de
                                            5 dasdasd
                                            asdasdas
                                        </a>
                                    </h4>
                                </div>
                                <div className={"o-container-sb"}>
                                    {/*TODO agregar/crear molecula contenedora de los botones*/}
                                    <div><a className={"a-icon a-icon-eye"} href=""></a><p
                                        className={"a-title-gray"}>1</p>
                                    </div>
                                    <div><a className={"a-icon a-icon-message"} href=""></a><p
                                        className={"a-title-gray"}>1</p></div>
                                    <div><a className={"a-icon a-icon-heart"} href=""></a><p
                                        className={"a-title-gray"}>1</p></div>
                                    <div><a className={"a-icon a-icon-save"} href=""></a><p
                                        className={"a-title-gray"}>1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default App;
