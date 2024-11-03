import React, { forwardRef } from 'react'
// import {
// 	MdImportContacts,
// 	MdViewQuilt,
// 	MdExtension,
// 	MdChat,
// 	MdCloudCircle
// } from 'react-icons/md'

import './style.css'

const DevelopersCard = forwardRef<HTMLElement>((props, developersRef) => (
	<section className='card' ref={developersRef}>
		<div className='mainActionsWrapper'>

			<header className='header'>
				<h5> Documentação</h5>
				<p>Comece a integrar os produtos e ferramentas da Stripe</p>
			</header>

			<div className='mainActions'>
				<ul>
					<li><h5>Comece já</h5></li>
					<li><p>Checkout pré-integrado</p></li>
					<li><p>Bibliotecas e SDKs</p></li>
					<li><p>Plugins</p></li>
					<li><p>Amostras de código</p></li>
				</ul>

				<ul>
					<li><h5>Guias</h5></li>
					<li><p>Aceitar pagamentos online</p></li>
					<li><p>Gerenciar assinaturas</p></li>
					<li><p>Enviar pagamentos</p></li>
					<li><p>Configurar parametros presenciais</p></li>
				</ul>
			</div>
		</div>

		<footer className='footer'>
			<div>
				<p> Referência completa sobre a API</p>
				<p>Suporte</p>
			</div>
			<div>
				<p>Status da API</p>
				<p> Changelog da API</p>
			</div>
		</footer>
	</section>
))

export default DevelopersCard