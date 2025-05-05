
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = 0;
    let height = 0;
    let particlesArray: Particle[] = [];
    const particleCount = isMobile ? 30 : 80;
    let animationFrameId: number;
    
    // Mouse position
    let mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: isMobile ? 50 : 150
    };
    
    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      // Reset particles when canvas resizes
      initParticles();
    }
    
    // Create particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;
      
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 2 + 1;
        this.density = Math.random() * 20 + 2;
        
        // Random color from cyberpunk palette
        const colors = [
          'rgba(155, 135, 245, 0.8)',  // cyber-purple
          'rgba(30, 174, 219, 0.8)',   // cyber-blue
          'rgba(249, 115, 22, 0.8)',   // cyber-orange
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      
      update() {
        if (mouse.x === null || mouse.y === null) return;
        
        // Calculate distance between particle and mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = forceDirectionX * force * this.density;
          const directionY = forceDirectionY * force * this.density;
          
          this.x -= directionX;
          this.y -= directionY;
        } else {
          // Return to original position
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }
    }
    
    function initParticles() {
      particlesArray = [];
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particlesArray.push(new Particle(x, y));
      }
    }
    
    function connectParticles() {
      if (!ctx) return;
      
      const opacityValue = isMobile ? 0.3 : 0.15;
      const connectionRadius = isMobile ? 80 : 130;
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionRadius) {
            const opacity = 1 - (distance / connectionRadius);
            ctx.strokeStyle = `rgba(155, 135, 245, ${opacity * opacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }
    
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    }
    
    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.x;
      mouse.y = e.y;
    }
    
    function handleTouchMove(e: TouchEvent) {
      if (e.touches[0]) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    }
    
    function handleMouseLeave() {
      mouse.x = null;
      mouse.y = null;
    }
    
    // Initialize canvas and particles
    resizeCanvas();
    
    // Add event listeners
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchend', handleMouseLeave);
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchend', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0 pointer-events-none" 
    />
  );
};

export default AnimatedBackground;
