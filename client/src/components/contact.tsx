import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const hours = [
  { day: "Monday-Friday", time: "6:00 AM - 9:00 PM" },
  { day: "Saturday", time: "7:00 AM - 9:00 PM" },
  { day: "Sunday", time: "7:00 AM - 8:00 PM" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Find Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="font-semibold mb-2">Address</h3>
                      <p>430 JM Lindsay Blvd</p>
                      <p>Lindsay, TX 76250</p>
                      <a 
                        href="https://maps.google.com/?q=430+JM+Lindsay+Blvd,+Lindsay,+TX+76250"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline mt-2 inline-block"
                      >
                        View on Google Maps
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <a 
                        href="tel:9405801868"
                        className="text-primary hover:underline"
                      >
                        (940) 580-1868
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <div className="w-full">
                    <h3 className="font-semibold mb-4">Hours of Operation</h3>
                    {hours.map(({ day, time }) => (
                      <div key={day} className="flex justify-between mb-4 last:mb-0">
                        <span className="font-medium">{day}</span>
                        <span className="text-muted-foreground">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}