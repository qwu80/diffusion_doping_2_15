let sceneCount = 0;
let opening = 0;

let StartScroll = () => {
  let controller = new ScrollMagic.Controller();

  d3fourlevels();
  updatefourlevels(75);
  // d3bands();
  d3bands2();
  bands_function();
  
  // let scene_00 = new ScrollMagic.Scene({
  //   triggerElement: '#scene_00'
  // })
  // .setClassToggle('#scene_00', 'fade-in')
  // // .addIndicators({
  // //   name: 'fade scene',
  // //   colorTrigger: 'white',
  // //   colorStart: '#FFF7AE'
  // // })
  // .on('start', () => {
  //   if (sceneCount == 0) {
  //     sceneCount = 0.55;
  //     opening = 0;


  //     constant_temperature = 400;
  //     temp = 400


  //     for ( var i = 0; i < point_count; i++ ) {
  //       array_plot[i] = []; 
  //       array_positive_y[i] = []; 
  //      array_negative_y[i] = []; 
  //     }


      
  //     d3bands_0();
  //   } else {
  //     sceneCount = 0;
  //   }
  // })
  // .addTo(controller);

  let scene_0 = new ScrollMagic.Scene({
      triggerElement: '#scene_0'
    })
    .setClassToggle('#scene_0', 'fade-in')

    .on('start', () => {
      if (sceneCount == 0) {
      


        nn_live.checked = true  
        sceneCount = 0.5;
        opening = 0;

        constant_temperature = 400;
        temp = 400

        
        scattering_count =1
        scattering_velocity=1
        
        array_positive_y_0 = []
        array_negative_y_0 = []
        array_plot_0 = []
        for ( var i = 0; i < point_count; i++ ) {
          array_plot[i] = []; 
          array_positive_y[i] = []; 
         array_negative_y[i] = []; 
        }


        
        d3bands_0();
      } else {
        sceneCount = 0;
        reset_scene1()
      }
    })
    .addTo(controller);







    let scene_1 = new ScrollMagic.Scene({
      triggerElement: '#scene_1'
    })
    .setClassToggle('#scene_1', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 0.5) {

        switch_re.checked = true
        opening = 1
        
        sceneCount = 1;
        reset_scene1()

        // constant_temperature=400

        switch_1 = 2//both

        array_positive_y_0 = []
        array_negative_y_0 = []
        array_plot_0 = []

        array_positive_y_0_e = []
        array_negative_y_0_e = []
        array_plot_e_0 = []

        array_positive_y_0_h = []
        array_negative_y_0_h = []
        array_plot_h_0 = []

        for ( var i = 0; i < point_count; i++ ) {
          array_plot[i] = []; 
          array_positive_y[i] = []; 
         array_negative_y[i] = []; 

         array_plot_e[i] = []; 
          array_positive_y_e[i] = []; 
         array_negative_y_e[i] = []; 

         array_plot_h[i] = []; 
          array_positive_y_h[i] = []; 
         array_negative_y_h[i] = []; 
        }
        // constant_fermi = Math.round(1000*-0.28*0.026)/1000
        // console.log(constant_fermi) 
        // console.log(constant_temperature)
        constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
        // $('#zoom1').anythingZoomer({
        //   smallArea: 'small',
        //   clone: true,
        //   edge: 0,
        //   switchEvent: 'none'
        // });

        d3bands();
        reset_d3bands()
        d3bands();
      } else {
        sceneCount = 0.5;
        // switch_1 = 0
        reset_scene1()
      }
    })
    .addTo(controller);


  



    let scene_2 = new ScrollMagic.Scene({
      triggerElement: '#scene_2'
    })
    .setClassToggle('#scene_2', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 1) {

        switch_re.checked = true
        opening = 1
        
        sceneCount = 2;
        reset_scene1()

        // constant_temperature=400

        switch_1 = 2//both

        array_positive_y_0 = []
        array_negative_y_0 = []
        array_plot_0 = []

        array_positive_y_0_e = []
        array_negative_y_0_e = []
        array_plot_e_0 = []

        array_positive_y_0_h = []
        array_negative_y_0_h = []
        array_plot_h_0 = []

        for ( var i = 0; i < point_count; i++ ) {
          array_plot[i] = []; 
          array_positive_y[i] = []; 
         array_negative_y[i] = []; 

         array_plot_e[i] = []; 
          array_positive_y_e[i] = []; 
         array_negative_y_e[i] = []; 

         array_plot_h[i] = []; 
          array_positive_y_h[i] = []; 
         array_negative_y_h[i] = []; 
        }
        // constant_fermi = Math.round(1000*-0.28*0.026)/1000
        // console.log(constant_fermi) 
        // console.log(constant_temperature)
        constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
        // $('#zoom1').anythingZoomer({
        //   smallArea: 'small',
        //   clone: true,
        //   edge: 0,
        //   switchEvent: 'none'
        // });

        d3bands();
        reset_d3bands()
        d3bands();
      } else {
        sceneCount = 1;
        // switch_1 = 0
        reset_scene1()
      }
    })
    .addTo(controller);


    let scene_3 = new ScrollMagic.Scene({
      triggerElement: '#scene_3'
    })
    .setClassToggle('#scene_3', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 2) {

        switch_re.checked = true
        opening = 1
        
        hole_add =0
        sceneCount = 3;
        reset_scene1()

        // constant_temperature=400

        switch_1 = 2//both

        array_positive_y_0 = []
        array_negative_y_0 = []
        array_plot_0 = []

        array_positive_y_0_e = []
        array_negative_y_0_e = []
        array_plot_e_0 = []

        array_positive_y_0_h = []
        array_negative_y_0_h = []
        array_plot_h_0 = []

        for ( var i = 0; i < point_count; i++ ) {
          array_plot[i] = []; 
          array_positive_y[i] = []; 
         array_negative_y[i] = []; 

         array_plot_e[i] = []; 
          array_positive_y_e[i] = []; 
         array_negative_y_e[i] = []; 

         array_plot_h[i] = []; 
          array_positive_y_h[i] = []; 
         array_negative_y_h[i] = []; 
        }
        // constant_fermi = Math.round(1000*-0.28*0.026)/1000
        // console.log(constant_fermi) 
        // console.log(constant_temperature)
        constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
        // $('#zoom1').anythingZoomer({
        //   smallArea: 'small',
        //   clone: true,
        //   edge: 0,
        //   switchEvent: 'none'
        // });

        d3bands();
        reset_d3bands()
        d3bands();
      } else {
        sceneCount = 2;
        // switch_1 = 0
        electron_add  = 0
        reset_scene1()
      }
    })
    .addTo(controller);



   
 
}