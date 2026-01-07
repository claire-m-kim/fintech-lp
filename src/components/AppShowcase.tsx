import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AppShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVkaXQlMjBjYXJkJTIwcGF5bWVudHxlbnwxfHx8fDE3NjA2NTMyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Payment Card"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -top-8 -right-8 bg-white text-gray-900 p-6 rounded-2xl shadow-xl z-20"
            >
              <div className="text-blue-600 mb-1">2.5초</div>
              <div className="text-sm text-gray-600">평균 결제시간</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-8 -left-8 bg-white text-gray-900 p-6 rounded-2xl shadow-xl z-20"
            >
              <div className="text-blue-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">보안 인증</div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-2 bg-blue-500 bg-opacity-30 backdrop-blur-sm rounded-full mb-6"
            >
              간편결제 앱
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              모든 결제를
              <br />
              하나의 앱으로
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
              className="text-blue-100 mb-8"
            >
              blue pay 앱 하나로 온라인과 오프라인의 모든 결제를 간편하게 처리하세요.
              카드 등록부터 결제, 포인트 적립까지 모든 과정이 한 곳에서 이루어집니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              {[
                { title: 'QR 코드 결제', desc: '카메라로 스캔하면 바로 결제 완료' },
                { title: 'NFC 터치 결제', desc: '스마트폰을 대기만 하면 즉시 결제' },
                { title: '온라인 결제', desc: '웹사이트에서도 원클릭으로 결제' },
                { title: '포인트 적립', desc: '결제할 때마다 자동으로 포인트 적립' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="mb-1">{item.title}</div>
                    <div className="text-blue-200 text-sm">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
