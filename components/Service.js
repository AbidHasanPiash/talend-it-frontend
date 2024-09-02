'use client'
import getScrollAnimation from '@/utils/getScrollAnimation';
import { useMemo } from 'react'
import { motion } from "framer-motion";
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';

export default function Service() {
    const services = [
        {
            title: 'Graphic Design',
            description: 'Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.',
            imgSrc: 'images/graphic.svg',
        },
        {
            title: 'UI Design',
            description: 'Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.',
            imgSrc: 'images/ui-design.svg',
        },
        {
            title: 'UX Design',
            description: 'Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.',
            imgSrc: 'images/ux-design.svg',
        },
    ];
    return (
        <div className="py-16">
            <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
                <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
                    {services.map((service, index) => (
                        <ServiceCard 
                            key={index}
                            title={service.title}
                            description={service.description}
                            imgSrc={service.imgSrc}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

const ServiceCard = ({ title, description, imgSrc }) => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    return (
        <ScrollAnimationWrapper>
        <motion.div 
            variants={scrollAnimation}
            className="border border-gray-100 rounded-3xl bg-white px-8 py-12 shadow-2xl shadow-gray-600/10 sm:px-12 lg:px-8">
            <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
                <p className="mb-6 text-gray-600">
                    {description}
                </p>
                <a href="#" className="block font-medium text-primary">Know more</a>
            </div>
            <img
                src={imgSrc}
                className="ml-auto w-2/3"
                alt="illustration"
                loading="lazy"
                width="900"
                height="600"
            />
        </motion.div>
        </ScrollAnimationWrapper>
    );
};