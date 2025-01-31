import React from 'react'
function BlogContent() {
    return (
        <section id="blog" class="py-3">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card-columns">
                            <div class="card">
                                <img src="https://source.unsplash.com/random/300x200" alt="" class="img-fluid card-img-top" />
                                <div class="card-body">
                                    <h4 class="card-title">Blog Post One</h4>
                                    <small class="text-muted">Written by Jeff on 05/20</small>
                                    <hr />
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla facilis, sequi excepturi, quisquam, dignissimos
                                      molestiae dicta dolore dolores quas vel sunt placeat tempora expedita suscipit. Magni vel iusto mollitia
                                      exercitationem.
                  </p>
                                </div>
                            </div>

                            <div class="card p-3">
                                <blockquote class="card-blockquote card-body">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident amet tenetur vel quam atque est?</p>
                                    <footer class="blockquote-footer">
                                        <small class="text-muted">Someone Famous in
                      <cite title="Source Title">Source Title</cite>
                                        </small>
                                    </footer>
                                </blockquote>
                            </div>

                            <div class="card">
                                <img src="https://source.unsplash.com/random/301x200" alt="" class="img-fluid card-img-top" />
                                <div class="card-body">
                                    <h4 class="card-title">Blog Post Two</h4>
                                    <small class="text-muted">Written by Karen on 05/22</small>
                                    <hr />
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla facilis, sequi excepturi, quisquam, dignissimos
                                      molestiae dicta dolore dolores quas vel sunt placeat tempora expedita suscipit. Magni vel iusto mollitia
                                      exercitationem.
                  </p>
                                </div>
                            </div>

                            <div class="card p-3 bg-danger text-white">
                                <blockquote class="card-blockquote card-body">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident amet tenetur vel quam atque est?</p>
                                    <footer class="blockquote-footer">
                                        <small class="text-white">Someone Famous in
                      <cite title="Source Title">Source Title</cite>
                                        </small>
                                    </footer>
                                </blockquote>
                            </div>

                            <div class="card">
                                <img src="https://source.unsplash.com/random/302x200" alt="" class="img-fluid card-img-top" />
                                <div class="card-body">
                                    <h4 class="card-title">Blog Post Three</h4>
                                    <small class="text-muted">Written by Harry on 05/23</small>
                                    <hr />
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla facilis, sequi excepturi, quisquam, dignissimos
                                      molestiae dicta dolore dolores quas vel sunt placeat tempora expedita suscipit. Magni vel iusto mollitia
                                      exercitationem.
                  </p>
                                </div>
                            </div>

                            <div class="card p-3">
                                <blockquote class="card-blockquote card-body">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident amet tenetur vel quam atque est?</p>
                                    <footer class="blockquote-footer">
                                        <small class="text-muted">Someone Famous in
                      <cite title="Source Title">Source Title</cite>
                                        </small>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogContent;