const express= require('express')
const router= express.Router()
const Aboutus= require('../models/aboutus')


router.get('/',(req,res)=>{

  const markers={
      lat:40.7510,
      lng:73.9776,
      label:{color: 'red', text:'A'},
      title: 'TCS' 
  }


  const info={
    
    values:' Our Values: Leading change,  Integrity,  Respect for the individual,  Excellence, Learning and sharing',
    history:' First set out in 2003, these Values continue to be as relevant as when they were first articulated and are lived everyday by our employees across the world in multiple ways.'+
            'Our Employees are signatories of the Tata Code of Conduct is a set of principles that guide and govern the conduct of Tata companies and their employees in all matters relating to business. Introduced in 1998, the Code lays down the ethical standards that Tata employees have to observe in their professional lives, and it defines the value system at the heart of the Tata group and its many business entities.'+
            'The Code is a dynamic document that reinforces the Tata canon of honourable behaviour in business. The Code has been modified down the years to keep it in step with changing regulatory norms in the different parts of the world that Tata companies now do business. These modifications have reinforced the Code, and enable it to reflect the diverse business, cultural and other factors that have a bearing on the health of the Tata brand.'
            +'To learn more about the Tata Group’s 150+ years of history, please click the link below.'+'---Tata Group History',
    learnmore: 'In 1975, TCS delivered an electronic depository and trading system called SECOM for the Swiss company SIS SegaInterSettle [de]; it also developed System X for the Canadian Depository System and automated the Johannesburg Stock Exchange.[25] TCS associated with a Swiss partner, TKS Teknosoft, which it later acquired' 
    }

    let data=Object.assign(markers,info)

    res.json(JSON.stringify(data))

})


// router.use(auth)

router.post('/data', (req,res)=>{

  console.log(req.body)
    const {marker, info}= req.body

    let newmarkers={
      lat:0,
      lng:0,
      label:{color: '', text:''},
      title: '' 
  }

    var aboutus= new Aboutus() 
    
    this.aboutus.marker=marker
    this.aboutus.info=info

    aboutus.save()
            .then(newjson=> res.status(200).send(newjson))
            .catch(err=>res.status(500).json({msg:err}))


})

module.exports=router