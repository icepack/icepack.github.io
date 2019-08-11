Search.setIndex({docnames:["background","contact","contributing","design","icepack","icepack.constants","icepack.demo.00-meshes-functions","icepack.demo.01-synthetic-ice-shelf","icepack.demo.02-larsen-ice-shelf","icepack.demo.03-synthetic-ice-stream","icepack.demo.04-ice-shelf-inverse","icepack.demo.05-hybrid-ice-stream","icepack.interpolate","icepack.inverse","icepack.models","icepack.models.friction","icepack.models.heat_transport","icepack.models.hybrid","icepack.models.ice_shelf","icepack.models.ice_stream","icepack.models.mass_transport","icepack.models.viscosity","icepack.norms","icepack.optimization","icepack.plot","icepack.utilities","index","installation","inverse","modules","overview","solvers","testing"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["background.rst","contact.rst","contributing.rst","design.rst","icepack.rst","icepack.constants.rst","icepack.demo.00-meshes-functions.rst","icepack.demo.01-synthetic-ice-shelf.rst","icepack.demo.02-larsen-ice-shelf.rst","icepack.demo.03-synthetic-ice-stream.rst","icepack.demo.04-ice-shelf-inverse.rst","icepack.demo.05-hybrid-ice-stream.rst","icepack.interpolate.rst","icepack.inverse.rst","icepack.models.rst","icepack.models.friction.rst","icepack.models.heat_transport.rst","icepack.models.hybrid.rst","icepack.models.ice_shelf.rst","icepack.models.ice_stream.rst","icepack.models.mass_transport.rst","icepack.models.viscosity.rst","icepack.norms.rst","icepack.optimization.rst","icepack.plot.rst","icepack.utilities.rst","index.rst","installation.rst","inverse.rst","modules.rst","overview.rst","solvers.rst","testing.rst"],objects:{"":{icepack:[4,0,0,"-"]},"icepack.constants":{glen_flow_law:[5,1,1,""],gravity:[5,1,1,""],heat_capacity:[5,1,1,""],ice_density:[5,1,1,""],ideal_gas:[5,1,1,""],latent_heat:[5,1,1,""],melting_temperature:[5,1,1,""],thermal_diffusivity:[5,1,1,""],water_density:[5,1,1,""],weertman_sliding_law:[5,1,1,""],year:[5,1,1,""]},"icepack.interpolate":{interpolate:[12,2,1,""]},"icepack.inverse":{BFGSSolver:[13,3,1,""],GaussNewtonSolver:[13,3,1,""],GradientDescentSolver:[13,3,1,""],InverseProblem:[13,3,1,""],InverseSolver:[13,3,1,""]},"icepack.inverse.BFGSSolver":{memory:[13,4,1,""],update_search_direction:[13,4,1,""]},"icepack.inverse.GaussNewtonSolver":{gauss_newton_energy_norm:[13,4,1,""],gauss_newton_mult:[13,4,1,""],update_search_direction:[13,4,1,""]},"icepack.inverse.GradientDescentSolver":{update_search_direction:[13,4,1,""]},"icepack.inverse.InverseSolver":{adjoint_state:[13,4,1,""],gradient:[13,4,1,""],line_search:[13,4,1,""],objective:[13,4,1,""],parameter:[13,4,1,""],problem:[13,4,1,""],regularization:[13,4,1,""],search_direction:[13,4,1,""],solve:[13,4,1,""],state:[13,4,1,""],step:[13,4,1,""],update_adjoint_state:[13,4,1,""],update_state:[13,4,1,""]},"icepack.models":{friction:[15,0,0,"-"],heat_transport:[16,0,0,"-"],hybrid:[17,0,0,"-"],ice_shelf:[18,0,0,"-"],ice_stream:[19,0,0,"-"],mass_transport:[20,0,0,"-"],viscosity:[21,0,0,"-"]},"icepack.models.friction":{bed_friction:[15,2,1,""],normal_flow_penalty:[15,2,1,""],side_friction:[15,2,1,""],tau:[15,2,1,""]},"icepack.models.heat_transport":{HeatTransport3D:[16,3,1,""]},"icepack.models.heat_transport.HeatTransport3D":{energy_density:[16,4,1,""],meltwater_fraction:[16,4,1,""],solve:[16,4,1,""],temperature:[16,4,1,""]},"icepack.models.hybrid":{HybridModel:[17,3,1,""],MassTransport:[17,3,1,""],bed_friction:[17,2,1,""],friction_stress:[17,2,1,""],gravity:[17,2,1,""],horizontal_strain:[17,2,1,""],normal_flow_penalty:[17,2,1,""],side_friction:[17,2,1,""],stresses:[17,2,1,""],terminus:[17,2,1,""],vertical_strain:[17,2,1,""],viscosity:[17,2,1,""]},"icepack.models.hybrid.HybridModel":{action:[17,4,1,""],compute_surface:[17,4,1,""],diagnostic_solve:[17,4,1,""],prognostic_solve:[17,4,1,""],quadrature_degree:[17,4,1,""],scale:[17,4,1,""]},"icepack.models.hybrid.MassTransport":{solve:[17,4,1,""]},"icepack.models.ice_shelf":{IceShelf:[18,3,1,""],gravity:[18,2,1,""],terminus:[18,2,1,""]},"icepack.models.ice_shelf.IceShelf":{action:[18,4,1,""],diagnostic_solve:[18,4,1,""],prognostic_solve:[18,4,1,""],quadrature_degree:[18,4,1,""],scale:[18,4,1,""]},"icepack.models.ice_stream":{IceStream:[19,3,1,""],gravity:[19,2,1,""],terminus:[19,2,1,""]},"icepack.models.ice_stream.IceStream":{action:[19,4,1,""],compute_surface:[19,4,1,""],diagnostic_solve:[19,4,1,""],prognostic_solve:[19,4,1,""],quadrature_degree:[19,4,1,""],scale:[19,4,1,""]},"icepack.models.mass_transport":{MassTransport:[20,3,1,""]},"icepack.models.mass_transport.MassTransport":{solve:[20,4,1,""]},"icepack.models.viscosity":{"\u03b5":[21,2,1,""],M:[21,2,1,""],rate_factor:[21,2,1,""],viscosity_depth_averaged:[21,2,1,""]},"icepack.norms":{norm:[22,2,1,""]},"icepack.optimization":{newton_search:[23,2,1,""]},"icepack.plot":{StreamplotSet:[24,3,1,""],contourf:[24,2,1,""],quiver:[24,2,1,""],streamline:[24,2,1,""],streamplot:[24,2,1,""],subplots:[24,2,1,""],tricontourf:[24,2,1,""],triplot:[24,2,1,""]},"icepack.utilities":{add_kwarg_wrapper:[25,2,1,""],depth_average:[25,2,1,""],diameter:[25,2,1,""],facet_normal_2:[25,2,1,""],grad_2:[25,2,1,""],lift3d:[25,2,1,""]},icepack:{constants:[5,0,0,"-"],interpolate:[12,0,0,"-"],inverse:[13,0,0,"-"],models:[14,0,0,"-"],norms:[22,0,0,"-"],optimization:[23,0,0,"-"],plot:[24,0,0,"-"],utilities:[25,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","data","Python data"],"2":["py","function","Python function"],"3":["py","class","Python class"],"4":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:data","2":"py:function","3":"py:class","4":"py:method"},terms:{"00004923343322z":8,"0282341471330407e":5,"06t17":8,"0x7f66a8592128":7,"0x7f66a926bbe0":7,"10c":5,"12e3":[8,9,10,11],"1e3":7,"1e9":7,"200e3":7,"207917118369125e":5,"2dx":[10,22],"2e3":7,"2nd":13,"2pt":[15,17,18,19,21],"3100539410649452e":9,"325843e":8,"3262462733184e":5,"358604e":8,"384857e":8,"38e3":[8,10],"450m":8,"46901282e":6,"4mcnt":8,"4mcoord_system":8,"4merri":8,"4merrx":8,"4mlat":8,"4mlon":8,"4mstdx":8,"4mstdy":8,"4mvx":8,"4mvy":8,"4mx":8,"4my":8,"50e3":[8,9,10,11],"52175273e":6,"5e3":[7,10],"632619056012439e":6,"6gib":8,"946497e":8,"99176423552e":5,"\u03b4":[8,10],"\u03b4h":8,"\u03b4s_\u03b4x":[9,11],"\u03b4t":[9,11],"\u03b4u":[10,11],"\u03b4x":7,"\u03b5":21,"\u03b5_x":17,"\u03b5_z":17,"\u03b6":11,"\u03b8":[7,10],"\u03bd":7,"\u03c0":7,"\u03c1_i":[9,11],"\u03c1_w":[9,11],"\u03c3":10,"\u03c3x":10,"\u03c3y":10,"\u03c4":9,"\u03c4_0":9,"\u03c4_b":9,"\u03c4_d":[9,11],"\u03d5":[7,9,11],"break":27,"case":[0,6,7,8,9,10,11,27,28],"class":[8,9,10,11,13,16,17,18,19,20,24],"default":[9,11,18,19],"export":27,"final":[6,7,8,9,10],"float":[6,7,8,9,11,17,18,19,20,21,23,24,32],"function":[7,8,9,10,11,12,13,15,17,18,19,20,21,23,24,25,26,27,28,30,31,32],"import":[1,6,7,8,9,10,11,31],"int":[7,8,9,17,18,19,23,24],"long":7,"new":[1,2,9,10,11,13],"public":8,"return":[6,7,8,9,10,11,12,13,15,16,17,18,19,20,21,23,24,25,26],"switch":9,"transient":[9,11],"true":[7,8,9,10,11],"try":[7,10,11,27],"while":[0,8,9,10,13,17,18,19,20,27],But:[7,8,32],CRS:8,C_s:[15,17],For:[7,8,9,10,11,15,17,24,32],GDS:8,IDs:[6,7,8,17,18,19],Ice:[0,5,7,9,10,17,18,19,20,26],One:[8,10],That:13,The:[0,2,3,6,7,8,10,11,12,13,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,31,32],There:[6,7,9,10,11,28,32],These:[3,7,8,9,10,11,28,32],Using:[10,11,31],_netcdf4:8,a_0:[10,21],abbrevi:6,abl:[10,11,28],about:[2,3,6,7,8,9,10,16,28,31],abov:[6,8,9,27],absenc:11,absolut:10,absurd:9,academ:0,acceler:[5,31],access:[1,8],accident:8,accord:6,account:[9,10,30],accumul:[7,9,20],accur:[9,17,18,19,32],accuraci:[11,17,18,19,20,32],achiev:[10,11,32],acoord:9,acquaint:30,across:[6,8,9],action:[9,10,13,15,17,18,19,21,31,32],activ:27,actual:[7,8,10,11,31],add:[7,8,9,10,15,17],add_circle_arc:7,add_kwarg_wrapp:25,add_line_loop:7,add_phys:7,add_plane_surfac:7,add_point:7,added:[7,27],adding:[9,27],addit:[8,9,10,11,27],addition:10,address:1,adjoint:[10,13],adjoint_st:13,advanc:11,advantag:11,advect:[16,20],affect:[9,10,27,28],afloat:[9,17,19,20],after:[8,9],again:10,against:32,agreement:10,ahead:9,aim:32,algebra:[6,7],algorithm:[3,10,13,17,18,19,28,32],align:28,all:[1,6,7,8,9,10,11,17,18,19,21,24,27,28,30,32],almost:[6,9,13],along:[7,8,11,13,15,17,27],alpha:[8,10],alpha_k:[13,28],alreadi:[6,10,27,30],also:[1,6,7,8,9,10,11,20,27,31,32],alter:7,altern:7,although:[7,8],alwai:[10,13,31],american:8,amount:[8,10,23],analog:7,analysi:30,analyt:[6,7,8,32],analyz:[6,7,8,11,26],angl:7,ani:[7,8,9,10,11,13,20,22,25,26,27],annoi:27,announc:1,anomali:9,anoth:[7,8,11,32],answer:[1,20,32],antarct:8,antarctica:[8,9],anyth:27,api:[0,26],appar:8,append:[7,8],appli:[6,7,8,10,11,13,17,18,19],applic:0,appreci:27,approach:[9,10,13],appropri:22,approx:[11,28],approxim:[7,8,9,10,11,13,23,24,28,31,32],apt:27,arbitrari:[7,9,17,31],arc:7,archiv:8,area:[6,7,8,10,15,17,31],aren:1,arg:[8,10,24],arguabl:[9,10],argument:[7,8,9,10,11,17,18,19,21],aris:13,arithmet:28,armijo:23,around:[7,9,10,11,24,31],arrai:[7,8,9,10,11,24],arriv:[9,11],arrow:24,artifact:[8,9],as_vector:[7,9,11],asid:10,assembl:[6,7,8,10,28],assign:8,assimil:10,associ:[9,20],assum:[7,8,9,10,11,13,17,18,19,21],asymptot:[9,32],atmospher:[5,7,8],atol:[10,13],aug:7,autom:7,auxiliari:13,avail:[6,8,22,27,32],averag:[11,21,25],avoid:[10,20],awai:[7,11],awar:0,axes:[6,7,8,9,10,11,24],axi:11,b_in:[9,11],b_out:[9,11],back:[10,27],background:[1,8,26],backtrack:23,backward:32,bad:11,balanc:[8,9,11,17,19],ballpark:8,band:8,basal:[8,9,10,11,15,17,28],base:[7,9,11,13,16,17,18,19,20,24,31],basenam:[8,10],bash_profil:27,bashrc:27,basi:[11,31],basic:[0,7,8,9,20,26],basin:11,bathymetri:[17,19],batteri:32,bau:28,becaus:[7,8,9,10,11,16],becom:[9,10],bed:[0,8,9,11,15,17,20],bed_frict:[9,11,15,17,19],bedmap2:8,bedmap2_b:8,bedmap2_coverag:8,bedmap2_fil:8,bedmap2_grounded_bed_uncertainti:8,bedmap2_icemask_grounded_and_shelv:8,bedmap2_lakemask_vostok:8,bedmap2_rockmask:8,bedmap2_surfac:8,bedmap2_thick:[8,10],bedmap2_thickness_uncertainty_5km:8,bedrock:9,been:[8,9,10,11,17,28],befor:[8,9,10,11],begin:[8,9,28],behavior:[9,10,32],being:[6,28],below:[7,8,9,13],beneath:[17,19],benefit:10,best:[8,9,32],beta_:28,beta_k:28,better:28,between:[0,8,9,10,11,31],beyond:9,bfg:[13,28],bfgssolver:13,bia:10,big:[7,8],biggest:11,bin:27,binari:27,bit:[7,8,9,11,28,31],black:[9,11],blatter:[0,18],blip:10,blue:[9,11],bnd_color:24,bnd_linewidth:[8,10],bodi:8,boilerpl:8,book:0,border:8,borrow:0,both:[8,9,10,11,16,27],bottom:[8,10],bound:[8,10,20],boundari:[6,7,8,9,10,13,15,17,18,19,24],box:8,bracket:13,braess:0,breadth:0,breakdown:32,brew:27,british:8,bryce:0,bug:[1,2],build:[10,27,30],built:[6,7,11,30],built_in:7,bureaucraci:27,cach:8,calcuat:31,calcul:[7,8,9,10,11,13,17,18,19,21,27,32],calculu:31,california:8,call:[6,7,8,9,10,24],callback:[10,13],calv:[7,8,11,17,18,19],cambridg:0,can:[1,2,6,7,8,9,10,11,13,17,18,19,21,24,26,27,28,30,31,32],capac:5,capit:0,captur:11,care:[8,9],caught:10,cavit:9,cdm_data_typ:8,cdot:[9,11,13,15,17,18,19,21,28,31],cell:7,center1:7,center2:7,center:[7,8,24],centerlin:7,certain:[9,28,30],cf16:8,cfl:20,chang:[1,7,8,10,11],channel:1,chapter:13,cheaper:11,cheat:10,check:[6,7,8,9,11,32],chi:10,chiefli:27,choic:[5,7,8,9,11],choos:9,chose:11,chosen:[0,6],circ:[7,8,10],circl:7,circular:7,clever:10,climat:7,close:[0,7,10],closer:[9,11],closest:10,cmap:[8,9,10,11,24],code:[0,2,6,7,8,9,11,28,30],coeffici:[0,7,9,10,11,18,28],coffe:10,cold:11,collection_to_geo:[8,10],color:[6,7,9,11,24],colorbar:[6,7,8,9,10,11,24],colormap:8,com:27,combin:[7,10,28],come:[7,8,9,10,16],command:[7,8],commentari:28,common:[7,8],compar:[7,9,32],comparison:11,compil:[8,23],complet:[7,9,11,27],complex:27,complic:[6,7,9],compon:[7,10,11,12,15,17,21,25,28,31],compress:8,comput:[7,8,9,10,11,13,15,17,21,22,25,27,28,30,31,32],compute_surfac:[9,11,17,19],conclud:9,condit:[6,7,8,9,10,13,15,17,18,19,20,23],configur:[9,27],confin:11,conflict:27,conjug:[13,28],connect:[7,13],consequ:10,conserv:[13,17,18,19,20,32],consid:[9,32],consist:[6,7,9,10,13,17,19,20,27],constain:5,constant:[0,4,7,8,9,10,11,15,17,21,23,25,32],constanti:11,constitut:5,constrain:[9,10],constraint:[10,13],construct:[6,13],constructor:9,consum:10,contact:26,contain:[7,8,10,13,20,21,24],context:8,continu:[6,9,11,20],continuum:0,contour:[6,7,8,9,10,11],contourf:24,contraction_factor:23,contrast:8,contribut:[1,26],control:[9,10],conveni:10,convent:[0,7,8],converg:[7,10,13,23,28,31,32],convers:5,convex:[17,18,19,23,31],coordin:[6,7,8,10,11,17],copi:[7,8,9,11],core:[3,7],correct:[17,32],correctli:32,correspond:[0,8,17,19,24],cos:7,cosin:6,could:[8,9,10,11],couldn:10,cover:[0,8],crash:27,creat:[6,7,8,9,10,11,27],creator_nam:8,crevass:10,criterion:[23,28,31],critic:[10,32],cross:9,crs:8,crystal:10,cuffei:0,curl:27,current:[9,13,27,31],curv:[7,24],custom:[7,9,10,27],damag:[7,10],daniel:[1,8],data:[6,12,13,24,27,28,30],dataset:[8,24],date_cr:8,deal:13,debian:27,decai:32,decid:6,decis:28,decreas:[10,28,32],decrement:31,deep:11,deepcopi:[7,8,9,11],def:[8,9,10,11],defin:[6,7,8,9,11,12,13,25,28,31],definit:[0,7,28,31],deform:9,degener:7,degre:[6,7,8,9,10,11,17,18,19,25,28],degrees_east:8,degrees_north:8,delaunai:7,delta:[31,32],demo:[6,7,8,9,10,11,30],demonstr:[6,9,10],denot:[7,17,18,19],dens:[10,28],densiti:[0,5,6,7,8,9,16,31],depart:[8,10],departur:[10,32],depend:[9,10,21,27,31,32],depress:8,depth:[0,9,11,17,18,19,21,25],depth_averag:[11,25],deriv:[9,10,13,28,31],descent:[10,13,28],describ:[2,7,8,10,11,20,30],descript:[3,7,10,13,27],design:[26,32],desir:24,despit:9,detail:[3,8,10],detect:[11,32],determin:[7,17,18,19],develop:[1,2,26],deviat:10,diagnos:10,diagnost:[7,8,9,18,19,31,32],diagnostic_solv:[7,8,9,10,11,17,18,19],diagon:8,dial:10,diamet:[22,25],dict:23,dictionari:[7,8,10],did:[8,10,11],didn:[9,10],dietrich:0,differ:[0,6,7,8,9,10,11,17,21,24,26,27,28,31],differenti:[6,10,24,30],difficult:[9,10,28,32],diffus:[5,16],dim:11,dimens:[8,11,13],dimension:[17,18,19],dimensionless:[7,17,18,19,31],direct:[9,10,11,13,27,28],directli:[7,9,10,13,15,17,30],directori:[8,27,30],dirichlet:[6,7,10,17,18,19],dirichlet_id:[7,8,9,10,11,13,17,18,19],discontinu:11,discoveri:8,discret:[11,31,32],discuss:1,dissip:9,distribut:10,div:9,div_2:11,diverg:[7,8],divid:[7,10],document:[6,26,30],doe:[7,10,27],doesn:[7,8,9,10,27],doing:[27,31],domain:[6,7,8,9,11,15,17,20,22,27,32],don:[1,7,8,9,10],done:[7,8,10],dot:[10,17,18,21,31],down:[7,8,9],download:[8,27],downstream:[8,10],drag:10,drainag:11,draw:[9,24],drawn:7,drive:9,drop:[9,13],due:[5,8,9,15,17,18,19,31,32],dure:9,dynam:0,e_inflow:16,e_surfac:16,each:[0,6,7,8,10,12,13,24,26],earlier:[8,11],earth:8,earthdata:[8,30],easi:[13,30],easier:[7,9],easili:[8,9,27],edg:10,effect:[7,8,9,32],effici:13,effort:26,either:[2,6,7,13,15,17],element:[0,6,7,11,12,13,15,17,20,24,25,28,30,31,32],elev:[0,8,9,11,17,19,20],ellipt:[10,13,31],elmer:[0,5],elong:9,els:[7,9,11],email:[1,2],empir:31,empti:7,encount:6,end:[7,9,10,11,28],endpoint:7,energi:[0,9,13,16,21],energy_dens:16,enforc:[10,15,17],enough:[9,28],ensur:20,enthalpi:16,entir:[7,8,9,11],entiti:7,env:27,environ:27,epoch:7,epsg:8,equal:[5,7],equat:[0,7,9,10,11,13,16,17,18,19,20,24,30,31,32],equilibr:7,equilibrium:9,equip:13,equiv:28,equival:24,erron:10,error:[7,8,9,10,11,27,32],especi:[6,8,30],essenti:[7,21],estim:[8,10,13,17,18,19,28,32],etc:[5,6,7,8,10,17,21,31],euler:[17,18,19,20,32],european:8,evalu:[6,7,8,9,11,17,31],even:[8,9,11,28,30,31,32],eventu:9,everi:[7,8,10,27,28],everyth:[7,8,9,17,19,27],evid:9,evolut:[7,8,9,10,20],evolv:[7,9,10],exact:[9,11,32],exactli:[7,9,32],exampl:[6,7,8,9,10,18,24,32],exceed:7,excess:11,exclam:7,execut:[7,27],exert:[17,18,19],exhibit:[9,13],exist:27,exp:[7,10,21],expect:[0,7,8,9,10,11,27,30],expens:[6,11,13],experi:7,expert:[28,30],explain:[3,10],explicitli:[11,28],exploit:[17,18,19,31],expon:[0,5,9,10,15,17,32],exponenti:6,expr:6,express:[6,7,8,11,12,17,18,19,21],extend:[7,8,10,25],extens:[7,26],extension:10,extent:[8,9,10,28],extern:8,extra:[7,8,9,11,13,22,23,27],extrapol:11,extrud:[11,17,25],extrudedmesh:11,eyebal:11,fabric:10,facet_normal_2:25,facetnorm:[6,7],fact:9,factor:[5,9,10,11,16,21,22],fail:[27,28],failur:[10,32],fairli:[8,10],fall:[9,11],famili:[6,7,8,10,11],familiar:[0,8,30],fanci:1,far:[8,9,10,11,13,28],fast:[0,9,11,17,19,27],faster:28,fault:27,featur:[1,2,8,9,10,27],februari:8,fed:7,feed:7,feedback:7,fetch:8,fetch_bedmap2:[8,10],fetch_larsen_mesh:8,fetch_larsen_outlin:[8,10],fetch_measures_antarctica:[8,10],fetch_mosaic_of_antarctica:[8,10],few:[7,8,9,10,11],fewer:[10,13],field:[0,6,7,8,9,10,11,12,13,22,24,25,26,28,30],field_nam:8,fig:[6,7,8,9,10,11],figur:[7,8],file:[7,8],filenam:[7,8],fill:8,filter:8,find:[13,23,27,28,32],finit:[0,7,11,12,13,20,24,28,30,31,32],finiteel:[15,17,25],firedrak:[1,6,7,8,9,10,11,12,17,18,19,20,21,23,24,25,27,30],firedrakeproject:27,first:[6,7,8,9,10,13,27,28,31],fit:[10,32],fix:1,fjord:[9,15,17],flag:8,flatten:7,flexibl:10,float32:8,float64:8,flotat:9,flow:[0,7,8,9,10,15,17,18,19,20,21,26,28,30,31],fluiditi:[7,9,17,18,21,32],flush:7,flux:[6,7,9],focus:0,follow:[0,2,3,7,8,9,11,17,28],footprint:[11,17,25],form:[2,10,17,18,21,23,28],form_compiler_paramet:23,format:[7,8,9,10],formul:28,formula:27,forth:[7,8],forward:[7,9,10,16,18,19,20,28],found:[8,9,18,28,31],four:[7,10],frac:[9,10,11,15,17,18,19,21,24,28,31],fraction:[9,11,16],free:[1,2],freedom:8,fresh:10,friction:[0,4,5,9,10,11,13,14,17,19,28],friction_stress:17,from:[0,6,7,8,9,10,11,13,17,18,19,21,24,25,26,27,28,30,32],from_bound:[8,10],front:[7,9,17,19,32],frozen:7,fudg:10,full:13,func:25,functionspac:[6,7,8,9,10,11,12],fundament:0,further:9,gain:8,galerkin:[6,11],gamma:[15,17,18,19,24],gas:[5,21],gauss:[10,11,13,28],gauss_newton_energy_norm:13,gauss_newton_mult:13,gaussnewtonsolv:[10,13],gener:[6,7,8,10,11,27],geo:[7,8,10],geo_fil:[7,8,10],geograph:[7,8],geojson:[8,10],geometr:7,geometri:[6,10],geophys:8,georeferenc:8,geospati:8,geospatial_lat_max:8,geospatial_lat_min:8,geospatial_lat_unit:8,geospatial_lon_max:8,geospatial_lon_min:8,geospatial_lon_unit:8,geotiff:8,get:[1,2,6,7,8,9,10,11,13,20,27,30,31,32],get_cod:[7,8,10],gipp:[8,10],github:1,githubusercont:27,give:[3,6,7,8,9,10,11,17,18,19,32],given:[7,8,9,10,15,16,17,18,19,21,25,32],gl04c_geiod_to_wgs84:8,glacier:[0,7,9,10,11,13,15,17,19,20,21,26,27,28,30,31],glaciolog:0,glaicer:0,glen:[0,9,10,21],glen_flow_law:[5,10],global:27,gmsh:[7,8,10,27],goal:[0,26,28],gockenbach:0,goe:[0,7,9],going:[8,9,10],good:[0,8,9,10,11,20,27,30,32],grad:[6,10],grad_2:25,gradient:[9,10,13,25,28,31],gradientdescentsolv:13,graphic:6,gravit:[17,18,19],graviti:[5,7,9,11,17,18,19,31],grayscal:8,great:[0,7,8],greater:[0,9],greatest:7,greenland:9,greve:[0,18],greys_r:[8,10],grid:[8,12,24,27],griddata:[8,12,24],ground:[8,9,10,11,19,20],group:8,grow:7,guarante:28,guess:[7,8,9,10,11,13,17,18,19,23],guid:30,h01:22,h_expr:7,h_in:[7,9,11],h_inflow:[7,8,9,11,17,20],h_schoof:9,h_weertman:9,had:[8,9,31],half:[8,11],hand:[7,9,11,28,31],handi:8,handl:[6,8],happen:[10,27],hard:27,harder:32,has:[0,6,7,9,10,11,15,17,21,27,28,31,32],hasn:7,have:[0,1,6,7,8,9,10,11,17,21,25,27,30,32],haven:8,hdf5:8,heat:[0,5,16],heat_capac:5,heat_transport:[4,14],heattransport3d:16,heavi:10,height:[8,9,10],heinz:0,help:[0,6,7,10,30],helper:8,here:[1,6,7,8,10,11],hesit:1,hessian:13,high:[9,11],higher:[7,8,10,32],hoc:10,hold:32,home:8,homogen:[8,10],hood:24,hope:[9,32],hopefulli:[10,11],horizont:[11,17,25],horizontal_strain:17,host:8,how:[1,2,6,7,8,9,10,11,13,28,30,31,32],howev:[10,11,13,27,28,31],hp_k:28,hs_schoof:9,hs_weertman:9,hspace:[15,17,18,19,21],http:27,huge:9,human:10,hundr:8,hybrid:[4,11,14],hybridmodel:[11,17],hydrolog:9,hydrostat:[17,19],hyperbol:[10,13],ice:[0,5,6,8,10,11,15,16,17,18,19,20,21,26,28,30,31,32],ice_dens:[5,9,11],ice_front_id:[17,18,19],ice_shelf:[4,7,8,10,14],ice_shelf_test:27,ice_stream:[4,14],ice_stream_schoof:9,ice_stream_weertman:9,iceberg:11,icepack:[0,1,2,3,6,7,8,9,10,11,27,28,30,31,32],iceshelf:[7,8,10,18],icestream:[9,11,19],idea:[7,10,20],ideal:[5,7,11,21],ideal_ga:5,ident:[8,11],illumin:7,illustr:8,imag:[8,10],image_fil:[8,10],image_filenam:[8,10],implaus:9,implement:[0,3,6,10,13,17,18,19,21,28,30,32],implicit:20,improv:[13,31],imshow:[8,10],includ:[0,6,7,8,9,10,11,16,22,27],incorpor:7,incorrectli:10,increas:[7,9],inde:32,index:[8,10,26],indic:[7,10,32],indispens:27,inequ:10,inf:[8,10,24],infer:[7,13,28],infin:[22,25],infinitesim:31,inflow:[7,9],influx:[7,9],info:7,inform:[2,7,8],inherit:[10,13,24],initi:[7,8,9,10,11,13,17,18,19,20,21,23],initial_point:24,inland:9,inlet:[7,10],inlet_angl:7,inlet_width:7,inlin:[6,7,8,9,10,11],inner:[6,7,9,10,11,28],input:[6,25],insid:27,insidi:10,instabl:9,instal:[8,26,30],instanc:[7,13],instead:[6,7,8,9,10,11,17,21,27,28,32],institut:8,instruct:[1,27],int32:8,int_0:[11,17],int_:[10,15,17,18,19,21,22,31],integ:[7,17,18,19],integr:[6,7,8,17,18,19,24],intention:10,interact:[26,30],interest:[0,3,7,8,9,10,11],interfac:27,interior:[7,8,11,27],intern:[0,1,2,3,8,27,31],internet:8,interpol:[4,6,7,8,9,10,11],interpret:[6,26],interspers:9,interv:11,introduc:[10,27],introduct:[0,30],invers:[3,4,11,26],inverse_problem:10,inverseproblem:[10,13],inversesolv:[10,13],invit:1,invok:27,involv:[1,2,8,13],ipykernel:27,irregular:27,irvin:8,isn:[7,8,9,32],isol:27,issu:[1,2,20,32],iter:[7,8,10,13,23,28,31],its:[7,9,17,27],itself:[7,8,9],join:1,jupyt:[7,27,30],just:[6,7,8,9,10,11,26,27,31,32],keep:[9,13,20,27],kei:13,kelvin:7,kernel:27,keyword:[7,8,9,10,17,18,19],keywords_vocabulari:8,kind:[7,8,10,24],know:[1,7,8,9,10,32],knowledg:0,known:[10,17,18,19],kpa:9,ksp_type:23,kurt:0,kwarg:[7,8,9,10,17,18,19,20,24],label:[7,8,9,11],lagrang:[10,11,17,18,19],lagrangian:13,lambda:[10,13],landsat:8,langl:[10,28,31],laptop:7,larg:[9,10,11,28],larger:[9,11],larsen:[7,10,26],last:[7,8,10,13],latent:[5,16],latent_heat:5,later:[6,7,8,9],law:[0,5,10,21,32],layer:[8,11,27],layout:8,lcar:7,lead:[1,9],least:[7,10,11],left:[7,8,9,10,11,17,18,19,22,31],leg:8,legend:6,legendr:11,length:[10,24],less:[7,8,9,10,31],let:[8,9,10,11,31],level:[8,9,10,17,18,19],librari:[5,8,26,27,30],licens:8,lift3d:25,lift:25,like:[0,1,5,6,7,8,9,10,13,27,28,31,32],likewis:7,limit:[11,13],line:[7,8,9,13,23,24],line_loop:7,line_search:13,line_str:[8,10],linear:[10,11,13,23,28,31,32],linearli:32,linewidth:[8,10],linfti:22,link:[13,27],linspac:[8,10],list:[1,7,8,17,18,19],literatur:0,littl:[7,26],live:12,load:[7,8,10,27],locat:8,log:32,logarithm:6,logic:11,login:8,look:[0,8,9,10],loop:[7,8,9,13],loos:10,lose:9,lossless:8,lost:8,lot:[1,7,9,10,27],low:[8,10,13,17,19],lower:[0,10],lucki:10,machin:30,maco:27,made:[2,8,10],magic:8,magnitud:[6,9],mai:[10,11,20],main:[7,26,30],mainli:[13,30],major:9,make:[0,5,6,7,8,9,10,11,22,24,27,30,31],manag:27,mandatori:27,mani:[0,6,7,8,10,23,27],manipul:6,manner:20,manual:[8,27],map:[8,13,28],margin:[11,13],marin:[9,10],mark:[0,7],mask:[8,10],mass:[0,8,9,11,13,20,28,32],mass_transport:[4,14,18,19],masstransport:[17,18,19,20],master:27,match:[13,32],math:7,mathcal:32,mathemat:0,mathscr:28,matlab:30,matplotlib:[6,7,8,9,10,11,24],matric:27,matrix:[10,13,28],matter:10,max:[7,8,10],max_:22,max_iter:[10,13,23],max_num_point:[6,24],max_valu:[7,9,11],maximum:[7,10,24],mean:[10,31],measur:[8,10,13,23,31],mechan:0,megapasc:[0,5],melt:[5,7,9,16,20],melting_temperatur:5,meltwat:[9,16],meltwater_fract:16,membran:[17,18,21,31],memori:13,mention:10,mere:[7,13],mesh2d:11,mesh:[7,9,10,11,17,24,25,26,27,28,32],metadata_convent:8,meter:[0,5,7,8,9,10,11],method:[0,6,7,8,9,10,11,13,17,18,19,28,30,31],metric:[10,22,25],middl:[7,9],might:[6,7,8,9,10,11,27,28],migrat:9,mimic:7,min:[8,10],minim:[10,13,23,28,31,32],minimum:31,mint:27,minut:7,misfit:[10,13,28],mismatch:[11,32],miss:8,mistak:32,mix:8,moa:8,mode:[10,11,13],model:[0,4,5,6,10,13,26,28,30,31],model_arg:[10,13],moder:9,modi:8,modifi:[3,9],modul:[4,7,8,14],mol:5,mole:21,momentum:[0,9],month:9,more:[0,1,2,6,7,8,9,10,13,26,27,28,31,32],moreov:[17,31],mosaic:8,most:[0,8,10,11,13,27,28,30,31],mostli:[8,10,11],mouginot:8,move:[7,10],movi:10,mpa:[0,9,16,21],msh2:[7,8,10],msh:[7,8,10],much:[0,6,7,8,9,10,11,31],multi:8,multilinestr:8,multipli:[6,9,10,13,28],must:25,mutual:11,mz_:28,mz_k:28,nabla:[9,10,17,18,19,22,31],naiv:10,name:[0,7,8,10,27],namespac:6,nasa:[8,30],nasti:7,nation:8,ncinfo:8,ndarrai:21,necessari:[0,8,10,11,13,17,18,19,24,28],need:[1,6,7,8,9,10,11,13,20,27,30],nest:8,net:10,netcdf4:8,netcdf:[8,10],neumann:[6,7,8],never:[30,32],newton:[7,10,13,17,18,19,28,31],newton_search:23,next:[6,7,8,9,10],nice:[0,6,8,16,31],noced:[13,23],nodal:12,node:[7,24],nois:8,none:[13,15,17,20,24,25],nonetheless:[6,10,20],nonlinear:[5,7,30,31],norm:[4,8,9,10,11,13,24,28,31],norm_typ:22,normal:[6,10,11,15,17,25],normal_flow_penalti:[15,17,18,19],note:9,notebook:[7,27,30],now:[7,8,9,10,11],nsidc:8,num_step:8,num_timestep:[7,9,11],num_year:[9,11],number:[5,7,8,9,10,11,13,16,17,18,19,22,24],numer:[0,2,6,7,8,10,13,17,19,26,28,30,32],numpi:[7,8,9,10,11,24,30],object:[6,7,8,9,10,13,16,17,18,19,20,21,23,28,31],observ:[6,7,8,10,13,28],obtain:[7,9,10],obviou:[8,9],occur:10,ocean:[7,9],odd:11,off:9,offer:[8,28],often:[8,13,28],ogc:8,omega:[10,15,17,18,19,21,22,31],onc:[1,10,13,26],one:[7,8,9,10,11,13,16,18,19,20,22,27,28,31,32],onli:[6,7,8,9,10,11,13,17,25,27,32],opaqu:[7,28],open:[1,2,7,8,10],oper:[6,13,25,27,28],oppos:[7,11],opt:[6,7,8,9,10,11],optic:8,optim:[4,10,13,17,18,19,28],option:[7,10,22,23,27],order:[7,8,13,20,28],ordinari:24,orient:7,origin:7,orthogon:[11,26],oscil:[10,28],oscillatori:8,other:[6,7,8,9,10,17,18,19,20,24,26,27,30,32],our:[0,1,7,8,9,10,11,30,31,32],out:[1,6,7,8,9,10,11,16,24,26,28],outflow:7,outflux:7,outlet:9,outlin:[7,8,10,27],outline_fil:[8,10],outline_filenam:[8,10],output:[7,8,32],outset:7,outward:[6,25],over:[6,7,8,9,10,11,25,31],overal:[7,28],overrid:9,overview:26,own:[7,9,10,17,21,27,30],p_0:28,p_i:[9,11],p_k:[13,28],p_w:[9,11],pack:7,packag:[0,7,8,27,28,29,30],pad:[9,11],page:[1,2,3,30],pair:[10,24],parallel:[9,15,17],paramet:[7,9,10,12,13,17,18,19,20,21,23,24,25,28],parameter:[9,10,11],parameter_nam:[10,13],parlanc:10,part:[6,7,8,9,10,15,17,18,19,21,26,31],partial:[10,30],particular:[0,10,11,21],pass:[6,7,8,9,10,17,18,19,21,23],patch:8,paterson:0,path:[8,10,27],pattern:[7,8,10],pc_type:23,pde:[7,9,10,13,31,32],penal:[10,13,28],penalti:[15,17,18,19],peninsula:8,per:21,perfectli:32,perform:[13,28],period:[7,11],perman:27,perspect:8,perturb:[7,32],petroleum:8,petsc:27,petsc_arch:27,petsc_configure_opt:27,petsc_dir:27,phase:13,phi:28,phi_0:28,phi_:28,phi_k:28,physic:[0,3,5,6,7,8,10,13,18,26,30,32],physical_lin:7,physical_surfac:7,pick:[7,8,9,10],piecewis:[6,31,32],pin:[9,10],pip3:27,pixel:8,place:[1,9],plane:[7,9],plane_surfac:7,plastic:9,platform:[8,10],plausibl:[7,9],pleas:1,plot:[4,6,7,8,9,10,11],plt:[6,7,8,9,10,11],plug:11,plume:9,point:[5,6,7,8,9,10,17,18,19,24,32],pole:8,polynomi:[6,11],pooch:8,poorli:13,popular:7,portal:8,pose:11,posit:[7,9,10,17,18,19,23,28,31],possibl:[0,6,9,10,11,27],post:[7,10,26],postprocess:[6,11,24],pot:10,power:[9,17,18,19],practic:[9,28],pre:27,precis:[6,7,8,28],precondit:[13,28],precondition:28,predict:[7,8,9],prefactor:21,preonli:23,prepar:9,prepend:8,preprocess:8,prescrib:[7,9],present:13,preserv:[17,18,19],press:0,pressur:[5,9,21],pretti:[7,11],previou:[7,8,9,10,11,13],primal:13,primarili:24,principl:[9,10,11,13,32],print:[6,7,8,9,10,11],print_error_and_regular:10,prior:10,probabl:10,problem:[6,7,8,9,11,13,15,17,18,19,26,27,28,31,32],procedur:[7,10,13,21,23],process:[7,8,10,26,27],produc:[6,8],product:28,product_vers:8,profil:[7,11],prognost:[7,8,10],prognostic_solv:[7,8,9,11,17,18,19],program:[7,8,10],programat:7,progress:[7,9,10],project:[1,2,7,8,9,11,27],prompt:8,propag:[8,9,11,16,18,19,20],properli:[13,27],properti:[8,10,13,32],proport:9,propos:9,propto:11,provid:[6,10,17,18,19,30],publicli:[1,10],pull:[2,8],purpos:19,put:[7,8,10],pygmsh:[7,8],pyplot:[6,7,8,9,10,11],pytest:27,python3:27,python:[6,7,9,10,26,27,30],q2d:[11,25],q3d:25,q_bed:16,q_k:13,quadrat:31,quadratur:[17,18,19],quadrature_degre:[17,18,19],quantifi:28,quantiti:[0,7,10,11,28,31],quartic:11,question:[1,28],quit:[8,9,10,32],quiver:24,radar:8,radian:7,radiometr:8,radiu:7,rais:[1,2],ralf:0,ramp:9,ran:8,random:[10,32],rang:[7,8,9,10,11],rangl:[10,28,31],rank:13,rare:11,raster:8,rasterio:[8,10,24],rate:[5,7,9,17,18,20,21,31],rate_factor:[5,7,8,9,10,11,21],rather:[7,8,9,10,11,15,16,17,27,31,32],ratio:[11,31],raw:27,rdbu:[8,9,10,11],reach:[1,9,10],read:[3,6,7,8,10,28,30],real:[6,7,8,15,17,25,27,28,30],realist:[7,9],realli:[6,7,8,32],reason:[7,8,9,10],recommend:27,rectanglemesh:[9,11],rectilinear:27,recurs:13,red:10,reduc:[9,10,13,17,18,19,31],refer:[0,8,9,26],reflect:11,regardless:23,regel:9,regim:17,region:[9,11],regular:[10,13,28],regularli:1,rel:[7,9,10,11,17,26,28,31],relat:9,relev:[15,17,18,26],reli:[28,32],reliabl:28,remain:8,remap:11,rememb:[7,27],remot:[8,10,13],remov:8,reparameter:10,repeat:7,repetit:9,replac:9,report:[1,2,7],repositori:7,repres:[6,7,8,10,11,27,31],represent:7,reproduc:[9,10],request:[1,2],requir:[0,8,9,10,27,31],research:8,resid:11,residu:[28,31],resolut:[6,8,11,24],resort:11,resourc:30,respect:[8,9,10,11,13,24,31,32],respond:9,restrict:8,result:[6,7,8,9,10,11,12,13,21,25,26],retriev:8,retrograd:9,reus:7,revers:25,revisit:[10,11],rewrit:9,rgb:8,rheologi:[0,7,8,9,13,17,21],rho:9,rho_i:[17,19],rho_ig:17,rho_igh:[9,19],rho_w:[17,19],rho_wg:17,rho_wgd:19,rich:6,ridicul:9,rift:[8,10],right:[6,7,8,9,10,11,17,18,19,22,31],rise:[8,10,11],robust:[26,28],rock:[8,15,17],roll:27,root:8,rosenbrock:6,ross:7,rough:[7,9,11],roughli:[5,7,9,10,11],round:16,routin:[1,6,7,30],rtol:[10,13],run:[7,8,9,10,11,26,30],run_simul:9,s_in:[9,11],s_out:[9,11],s_schoof:9,s_weertman:9,sai:[9,10,13,20,28,31],same:[6,7,8,9,10,11,12,21,24,25,31],sampl:30,saniti:[8,9,11,32],sat:7,satellit:8,satisfi:[20,23],save:[7,8,9,10,13,27],saw:[7,8],scalar:[6,12,22,24,31],scalarmapp:24,scale:[9,10,11,13,15,17,18,19,22,23,31],scenario:11,schema:8,scheme:[20,32],schoof_frict:9,scienc:8,scientif:32,script:[8,27],sea:[9,17,18,19],search:[10,13,23,28],search_direct:[10,13],search_toler:13,season:7,seawat:[5,31],second:[5,9,10,28,31],section:1,sediment:9,see:[1,2,5,6,7,8,9,10,11,13,18,19,23,30],seem:28,seen:6,segment:[6,8,24,27],sens:[8,10,13],sensibl:[9,10,11],sensor:8,separ:10,sequenc:32,seri:7,serv:32,session:27,set:[6,7,8,9,10,12,13,17,18,19,24,30,31],set_titl:7,set_xlabel:[8,10],settl:9,setup:27,sever:[7,8,9,10,21,27],shallow:[10,11,31,32],shape:[7,27],shapefil:7,shapero:1,sharp:[9,10],shear:[9,15,17,31],sheet:[0,6,8,9,11,26,30],shelf:[6,9,10,17,18,19,20,26,31,32],shell:[7,27],shelv:[7,9,10,18],shift:11,shock:9,shorter:11,should:[3,7,8,9,10,11,17,18,19,24,26,32],shouldn:0,show:[6,7,8,9,10,11,31],shown:[6,7,10],siam:0,side:[7,9,15,17],side_frict:[15,17,18,19],side_wall_id:[9,11,15,17],sigma:10,sign:10,signific:[11,32],similar:[9,10,11],simpl:[6,7,8,10,27],simplest:32,simplifi:[0,32],simul:[6,7,8,9,26],sin:7,sinc:[7,8,9,10,11,27,31],sine:6,singl:8,sinusoid:7,situat:32,size:[8,22],slack:1,slide:[0,5,15,17],slight:28,slightli:[0,7,9],slope:[7,9],slowli:28,small:[6,9,31],smaller:11,smooth:10,snow:8,softwar:[1,2,32],solid:0,solut:[7,9,11,13,31,32],solv:[6,7,8,9,10,11,13,16,17,18,19,20,24,27,28,30,31,32],solver:[0,2,3,6,7,10,13,20,23,26,27,30,32],solver_paramet:23,some:[0,2,3,6,7,8,9,10,13,15,17,27,28,30,31,32],somehow:8,someth:[0,7,8,9,24],sometim:[6,10],somewhat:7,somewher:8,sophist:10,sourc:[2,12,13,15,16,17,18,19,20,21,22,23,24,25,27,28,30],south:8,southeast:9,space:[6,7,8,11,12,25,32],spars:27,spatial:[7,8,10,11,32],spatial_resolut:8,spatialcoordin:[6,7,8,9,11],special:31,specif:[5,10],specifi:[6,7,8,9,10,11,13],spectral:[8,11],speed:[7,9,11,17],spin:[7,11],spiral:24,spread:7,springer:0,spuriou:28,sqrt3:11,sqrt:[9,10,11],squar:[6,7,10],src:27,stabil:20,stabl:[9,20],standard:[0,8,10],standard_name_vocabulari:8,stanlei:0,start:[7,8,9,11,24],starter:11,state:[7,9,10,11,13],state_nam:[10,13],statist:10,stdx:10,stdy:10,steadi:[7,9,11],steeper:9,steepest:13,step:[7,8,10,11,13],stereograph:8,still:[9,10,11],stoke:0,stop:[7,10,13,23],storag:[7,8],store:[8,10,13],strain:[9,10,17,18,21,31],stream:[7,15,17,19,26],streamlin:[6,7,8,24],streamplot:[6,7,8,24],streamplotset:24,stress:[9,15,17,18,19,21,31],stretch:[9,17],string:[7,8],stripei:10,structur:[17,18,19,27,31],sub:27,subglaci:9,subject:32,subplot:[6,7,8,9,10,11,24],subsequ:8,substanti:[8,9,10,11],success:[7,8],sudo:27,suffic:20,suffici:[28,31],suggest:[10,32],suitespars:27,sum:[7,10,20,28],summari:8,superlinear:13,suppli:9,support:11,sure:[9,27],surfac:[0,6,7,8,9,11,15,17,19,20],survei:8,swap:[7,26],swath:10,symbol:[6,7,8,11],symmetr:[28,31],syntax:7,synthet:[6,8,10,11,26],system:[0,7,8,9,10,11,13,16,27,28,31],tabl:8,tag:7,take:[1,6,7,8,9,10,11,25,27,28,32],taken:[7,8,17,18,19,30],tau:[10,15,17,21],tau_0:9,tau_b:9,tau_d:9,tau_z:17,tell:[7,27],temp:[9,11],temperatur:[5,7,8,10,16,17,21,30],tend:10,tensor:[17,18,21,31],term:[7,8,9,10,13,31],termin:[7,17,18,19,27],terminu:[7,8,9,11,17,18,19],terrain:[11,17],test:[2,9,10,26,27],text:[17,21,31],textbook:0,than:[0,7,8,9,10,11,13,15,16,17,27,28,31,32],thank:9,thei:[2,6,7,8,10,11,27],them:[7,8,11,30],themselv:9,theori:[0,10,32],thermal:5,thermal_diffus:5,theta:[10,28],thi:[0,1,2,3,5,6,7,8,9,10,11,13,15,16,17,18,19,20,21,22,23,24,25,27,28,30,31,32],thick:[0,6,7,8,9,10,11,17,18,19,20,21,28,30,31,32],thicken:7,thickness_filenam:[8,10],thin:[9,24,31],thing:[2,7,8,9,11,24,27,30,31],third:[9,11],thorough:0,those:[6,13],though:11,thousand:7,thread:7,three:[7,28],threshold:13,through:[2,6,7,8,9,10,15,17,27],throughout:[5,7,9],througout:7,thu:[11,27],tidal:7,tidewat:[17,19],tif:[8,10],tiff:8,time:[7,8,9,10,11,13,21,27],time_coverage_end:8,time_coverage_start:8,timestep:[7,9,16,18,19,20],timesteps_per_year:[9,11],titl:8,togeth:[7,8,10],tol:[7,8,9,10,11,17,18,19],toler:[7,9,10,11,17,18,19,23,31],tongu:9,too:[6,8,10,17,19,30],tool:[7,27],top:[7,8,10,11,31],topic:0,topographi:17,topolog:7,total:[7,8,10],toward:[7,9,10,32],trace:8,track:9,traction:31,tradit:11,trajectori:24,transcendent:6,transect:9,transform:[8,10,11],translat:[7,8],transpar:[8,10,26],transport:[0,16,20,32],trefethen:28,tri:0,trial:[8,9],triangl:[6,7],triangul:[7,8,27],tricontourf:[6,7,8,9,10,11,24],triplot:[6,7,8,10,24],troubl:[7,27],tunabl:10,tune:[8,9,28,31],tupl:[12,24],turn:[7,8,9,10],tutori:[0,26,30],tweak:26,twice:8,two:[6,7,10,11,13],type:[6,7,9,10,11,12,17,18,19,20,21,23,24,25,27,32],typic:[5,9],u_0:9,u_1:11,u_4:11,u_avg:11,u_expr:7,u_in:[7,9,11],u_k:31,u_ob:10,u_out:[9,11],u_schoof:9,u_shear:11,u_threshold:9,u_weertman:9,ubuntu:27,ufl:[6,21],ufl_domain:11,umfpack:27,unabl:10,unconvent:0,under:[9,11,24],underneath:8,understand:0,undesir:27,unidata:8,uniform:[8,17],uniqu:31,unit:[0,5,6,9,16,21,25,27,32],unitsquaremesh:6,univers:[0,5,8],unless:10,unlik:[9,11],unobserv:[13,28],unphys:[9,13],unrealist:8,unset:27,unstabl:9,unstructur:[6,24],until:[7,9,28],unweight:11,unzip:8,updat:[7,13,20,28],update_adjoint_st:13,update_search_direct:13,update_st:13,upper:10,upstream:[9,20],urn:8,use:[0,3,5,6,7,8,9,10,11,16,17,21,27,28,30,31],used:[0,5,6,7,8,9,10,11,13,17,18,19,30],useful:[6,7,11,24,27,32],user:[8,26,27,28,30],uses:[6,9,11,13,17,18,19,20,27,28,30,31],using:[1,6,7,8,9,10,11,13,17,20,21,27,28,32],usual:[7,9,11,24,28,31],util:[4,24],utility_mesh:6,v22:8,v_1:11,v_4:11,vagu:9,valu:[6,7,8,9,10,11,12,13,28,31,32],varepsilon:[10,17,18,21,31],varepsilon_x:17,varepsilon_z:17,variabl:[0,7,8,9,10,13,17,21,27],variat:[7,9,10,11,28,31,32],variou:[0,2,6,8,32],varrho:[18,31],vdegre:11,vector:[6,8,10,11,17,22,24,25,27,28],vectorfunctionspac:[6,7,8,9,10,11],vel_nsidc:8,veloc:[0,6,7,8,9,10,11,15,17,18,19,20,21,24,28,30,31],velocity_filenam:[8,10],velocity_x:[9,11],verbos:[7,8],veri:[7,9,10,11,17,18,19,27,30,31],version:[7,27],vertic:[7,11,17,25],vertical_strain:17,vfamili:11,via:[2,8],virtual:[8,11,27],virtual_env:27,virtualenvwrapp:27,viscos:[4,5,7,10,14,17,18,19,31],viscosity_depth_averag:[10,18,19,21],viscou:[10,17,18,19,21],visibl:[8,10],visit:6,visual:[6,8,26],vmax:[8,10],vmin:[8,10],volum:31,wai:[2,6,7,8,9,10,11,26,27,28,31],wall:[15,17],want:[1,2,6,7,8,9,10,11,26,27],wash:8,wast:8,water:[5,9,18,19],water_dens:[5,9,11],weak:10,web:8,websit:[8,27,30],weertman:[0,9],weertman_friction_with_ramp:9,weertman_sliding_law:[5,9,11],weight:[10,11,25],welcom:[2,26],well:[6,7,8,9,10,11],went:7,were:[7,8,10,11,13,17,18,19,27],weren:9,what:[6,7,8,9,10,11,13,32],whatev:[7,10],when:[6,7,8,9,10,11,13,17,18,19,21,27,31,32],where:[1,7,8,9,10,11,12,13,15,17,18,19,20,21,31,32],wherea:11,whether:[8,11,31,32],which:[6,7,8,9,10,11,13,23,28,30],whole:[7,11],why:2,wide:9,widespread:10,width:[7,8,10],wikibook:30,wildli:8,william:0,win:10,window:[8,10],wish:10,within:[9,20,23],without:[7,8,11,28],won:[8,10],work:[7,8,9,11,26,27,32],workflow:7,workin:11,workspac:1,worri:10,worth:8,would:[7,8,9,10,11,31],wrap:[7,9,10,11],wrapper:[8,9,24],wright:[13,23],write:[7,8,9,10],written:2,wrong:[7,10],xmax:[8,10],xmin:[8,10],year:[0,5,7,8,9,11],yet:8,yield:9,ymax:[8,10],ymin:[8,10],you:[0,1,2,3,6,7,8,9,10,11,17,20,21,24,26,27,28,30,31,32],your:[7,8,9,17,21,27,30],yourself:[8,27],z_0:28,z_k:28,zero:7,zeta:[11,17],zeta_:17,zip:7},titles:["Background","Contact","Contributing","Design","icepack package","icepack.constants module","Meshes, functions","Synthetic ice shelf","Larsen Ice Shelf","Synthetic ice stream","Inverse problems","Ice streams, once more","icepack.interpolate module","icepack.inverse module","icepack.models package","icepack.models.friction module","icepack.models.heat_transport module","icepack.models.hybrid module","icepack.models.ice_shelf module","icepack.models.ice_stream module","icepack.models.mass_transport module","icepack.models.viscosity module","icepack.norms module","icepack.optimization module","icepack.plot module","icepack.utilities module","icepack","Installation","Inverse solvers","icepack","Overview","Physics solvers","Testing"],titleterms:{"function":6,Ice:[8,11],The:9,analysi:10,background:0,bootstrap:11,chang:9,comment:27,conclus:[6,7,8,9,10,11],constant:5,contact:1,contribut:2,data:[7,8,9,10,11],demo:27,design:3,epilogu:11,flow:11,fluiditi:10,friction:15,geometri:[7,8,9,11],heat_transport:16,hybrid:17,ice:[7,9],ice_shelf:18,ice_stream:19,icepack:[4,5,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,29],imageri:8,indic:26,infer:10,input:[7,8,9,10,11],instal:27,interpol:12,invers:[10,13,28],larsen:8,law:9,mass_transport:20,mesh:[6,8],model:[7,8,9,11,14,15,16,17,18,19,20,21],modul:[5,12,13,15,16,17,18,19,20,21,22,23,24,25],more:11,norm:22,onc:11,optim:23,overview:30,packag:[4,14],perturb:9,physic:[9,31],plot:24,post:6,problem:10,process:6,quick:27,read:0,recap:9,resolv:11,respons:9,run:27,schoof:9,shear:11,shelf:[7,8],slide:9,solver:[28,31],start:27,stream:[9,11],submodul:[4,14],subpackag:4,symbol:0,synthet:[7,9],tabl:26,test:32,util:25,viscos:21}})