import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import Parallax from '../components/paralax';
/* import { useStaticQuery, graphql } from 'gatsby'; */
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from '../components/modal';
import BannerBack from '../media/img/banner/oferta.jpg';

const Cursos = () => {
	const [ cursos, setCursos ] = useState([]);

	const obtenerCursos = async () => {
		await fetch('https://back-uniline.herokuapp.com/api/course', {
			method: 'GET'
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => setCursos(res))
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		obtenerCursos();
	}, []);

	return (
		<Layout>
			<Head title="Cursos" />
			<Parallax
				title="Catalogo de cursos"
				subtitle="Aqui encontraras gran variedad de cursos"
				background={BannerBack}
			/>
			<div className="row d-block d-lg-flex">
				<div className="col-lg-3 px-0 my-3">
					<div className="card text-center mx-lg-5">
						<h5 className="my-3">INFORMES DE CURSOS</h5>
						<p>¿Te interesa alguno de nuestros cursos?</p>
						<p>Déjanos tus datos y recibe más información.</p>
						<Modal component="button" linkClass={'btn btn-outline-dark mx-5 mb-4'} />
					</div>
				</div>
				<div className="col-lg-9">
					<div className="row d-block d-lg-flex">
						{cursos ? (
							cursos.map((curso, index) => {
								return (
									<div className="card col-lg-3 my-3 ml-lg-5">
										<div className="card-body text-center">
											<img className="img-fluid" src={curso.urlPromotionalImage} alt="curso" />
											<h5 className="mt-2">{curso.title}</h5>
											<div className="row d-block d-lg-flex justify-content-center">
												<a
													className="btn btn-success mx-1"
													target="_blank"
													href={`https://uniline.online/curso/${curso.slug}`}
													rel="noopener noreferrer"
												>
													Mostrar
												</a>
												<button className="btn btn-primary mx-1 " disabled>
													{curso.priceCourse.free ? (
														'¡Gratis!'
													) : curso.priceCourse.promotionPrice ? (
														<b>{curso.priceCourse.promotionPrice} MXN</b>
													) : (
														<b>{curso.priceCourse.price} MXN</b>
													)}
												</button>
											</div>
										</div>
									</div>
								);
							})
						) : null}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Cursos;
