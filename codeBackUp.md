	<body layout="column">
		<md-toolbar layout-align="center center">
			<h1>This is my toolbar</h1>
		</md-toolbar>

		<!-- this div here -->
		<div style="height: 100%; border: 1px solid red" layout="row">
			<md-sidenav md-is-locked-open="true" style="background-color: aqua" flex md-whiteframe="{{paperVar}}">
				<p>sidenav</p>
			</md-sidenav>
			<md-content style="background-color: lightblue;" flex layout-padding>
				<h1>my content</h1>

				<md-list layout="column">
					<md-item ng-repeat="item in myArr">> {{item}}</md-item>
				</md-list>

				<md-divider></md-divider>

				<md-button class="md-raised md-accent">
					click me
				</md-button>

				<md-subheader>
					This is my SubHeader: <span>123 123 123</span>
				</md-subheader>

				<md-icon md-svg-src="mahManIcon"></md-icon>

			</md-content>
		</div> 
		<md-bottom-sheet style="background-color: antiquewhite; overflow: hidden">
			<p>bottom stuff</p>
		</md-bottom-sheet>
	</body>