import React, { forwardRef } from 'react'




import './styles.css'
const ProductsCard = forwardRef<HTMLElement>((props, productsRef) => (
	<section className='card' ref={productsRef}>
		<div>
			<ul className='actions'>
				<li><h5>Pagamentos</h5></li>
				<li>
					
					<div className='description'>
						<p>Payments</p>
						<p>Pagamentos online</p>
					</div>
				</li>
				{/* <li>
					<div className='description'>
						<p>Terminal</p>
						<p>Pagamentos presenciais</p>
					</div>
				</li>
				<li>
					<div className='description'>
						<p>Connect</p>
						<p>Pagamentos para plataformas</p>
					</div>
				</li>
				<li>
					<div className='description'>
						<p>Billing</p>
						<p>Assinaturas e faturamento</p>
					</div>
				</li> */}
			</ul>

			<ul className='actions'>
				<li><h5>Repases</h5></li>
				<li>
					<div className='description'>
						<p>Payouts</p>
						<p>Repasses programáticos</p>
					</div>
				</li>
				<li>
					<div className='description'>
						<p>Issuing</p>
						<p>Criação de cartão</p>
					</div>
				</li>
			</ul>
		</div>

		<div>
			<ul className='actions'>
				<li><h5>Operações de negócio</h5></li>
				<li>
					<div className='description'>
						<p>Radar</p>
						<p>Gerenciamento de fraudes e riscos</p>
					</div>
				</li>
				<li>
					<div className='description'>
						<p>Sigma</p>
						<p>Relatórios personalizados</p>
					</div>
				</li>
				<li>
					<div className='description'>
						<p>Atlas</p>
						<p>Incorporação de startups</p>
					</div>
				</li>
			</ul>
		</div>
	</section>
))

export default ProductsCard