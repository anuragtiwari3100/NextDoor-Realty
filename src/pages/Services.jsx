// import { motion } from "framer-motion";
// import Header from "@/components/Header";
// import {
//   Building2,
//   Ruler,
//   Construction,
// } from "lucide-react";

// const servicesData = [
//   {
//     icon: <Building2 className="w-12 h-12" />,
//     title: "Architectural Design",
//     description: "Award-winning architectural solutions that blend modern aesthetics with practical functionality.",
//     features: [
//       "Custom design solutions",
//       "3D visualization",
//       "Sustainable architecture",
//       "Interior design integration",
//     ],
//     projects: "250+ architectural projects completed",
//   },
//   {
//     icon: <Ruler className="w-12 h-12" />,
//     title: "Structural Engineering",
//     description: "Comprehensive structural analysis using advanced 3D modeling and simulation tools.",
//     features: [
//       "Seismic analysis",
//       "Foundation design",
//       "Steel structure design",
//       "Reinforced concrete design",
//     ],
//     projects: "200+ high-rise projects worldwide",
//   },
//   {
//     icon: <Construction className="w-12 h-12" />,
//     title: "Project Management",
//     description: "End-to-end project management services with a track record of delivering 95% of projects ahead of schedule.",
//     features: [
//       "Timeline optimization",
//       "Resource allocation",
//       "Risk management",
//       "Quality control",
//     ],
//     projects: "150+ projects managed successfully",
//   },
// ];

// const Services = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <div className="pt-20">
//         <section className="py-20 container mx-auto px-4">
//           {/* Section Header */}
        
//             <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
//               Our Services
//             </h1>
//             <p className="text-lg text-primary/70 max-w-3xl mx-auto">
//               We provide comprehensive engineering and construction solutions tailored to your needs,
//               backed by years of industry expertise and innovation.
//             </p>
         

        
//                 <div className="grid md:grid-cols-2 gap-8">
//                   {/* Service Details */}
//                   <div>
//                     <div className="text-primary mb-4">{service.icon}</div>
//                     <h2 className="text-2xl font-bold text-primary mb-4">
//                       {service.title}
//                     </h2>
//                     <p className="text-primary/70 mb-6">{service.description}</p>
//                     <p className="text-primary/90 font-medium">{service.projects}</p>
//                   </div>

//                   {/* Service Features */}
//                   <div>
//                     <h3 className="text-xl font-semibold text-primary mb-4">
//                       Key Features
//                     </h3>
//                     <ul className="space-y-3">
//                       {service.features.map((feature, idx) => (
//                         <li key={idx} className="flex items-center text-primary/70">
//                           <span className="w-2 h-2 bg-accent rounded-full mr-2" />
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
          
//             ))}
//           </div>
    
//       </div>
//     </div>
//   );
// };

// export default Services;
