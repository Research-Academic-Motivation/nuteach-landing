"use client"

import {
  Award,
  BookOpen,
  Brain,
  Clock,
  Code,
  Crown,
  FlaskConical,
  GraduationCap,
  Mail,
  Palette,
  Send,
  Star,
  TrendingUp,
  Trophy,
  Users,
  Zap,
  ListTodo,
  BarChart,
  Medal,
  ArrowUp,
  Timer,
  Bolt,
  Coins,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface PixelIconProps {
  icon: string
  className?: string
}

export function PixelIcon({ icon, className }: PixelIconProps) {
  const getIcon = () => {
    switch (icon) {
      case "award":
        return <Award className={cn("pixelated", className)} />
      case "book":
        return <BookOpen className={cn("pixelated", className)} />
      case "brain":
        return <Brain className={cn("pixelated", className)} />
      case "clock":
        return <Clock className={cn("pixelated", className)} />
      case "crown":
        return <Crown className={cn("pixelated", className)} />
      case "flask":
        return <FlaskConical className={cn("pixelated", className)} />
      case "graduation-cap":
        return <GraduationCap className={cn("pixelated", className)} />
      case "mail":
        return <Mail className={cn("pixelated", className)} />
      case "send":
        return <Send className={cn("pixelated", className)} />
      case "star":
        return <Star className={cn("pixelated", className)} />
      case "trending-up":
        return <TrendingUp className={cn("pixelated", className)} />
      case "trophy":
        return <Trophy className={cn("pixelated", className)} />
      case "zap":
        return <Zap className={cn("pixelated", className)} />
      case "users":
        return <Users className={cn("pixelated", className)} />
      case "code":
        return <Code className={cn("pixelated", className)} />
      case "palette":
        return <Palette className={cn("pixelated", className)} />
      case "list":
        return <ListTodo className={cn("pixelated", className)} />
      case "chart":
        return <BarChart className={cn("pixelated", className)} />
      case "medal":
        return <Medal className={cn("pixelated", className)} />
      case "up":
        return <ArrowUp className={cn("pixelated", className)} />
      case "time":
        return <Timer className={cn("pixelated", className)} />
      case "power":
        return <Bolt className={cn("pixelated", className)} />
      case "coin":
        return <Coins className={cn("pixelated", className)} />
      default:
        return <Star className={cn("pixelated", className)} />
    }
  }

  return getIcon()
}
