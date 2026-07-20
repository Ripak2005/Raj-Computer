import {
  Camera,
  Copy,
  Globe,
  HardDriveDownload,
  Laptop2,
  Printer,
  ScanSearch,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import type { ServiceIconName } from '../data/services'

export const serviceIcons: Record<ServiceIconName, LucideIcon> = {
  laptop: Laptop2,
  printer: Printer,
  copy: Copy,
  scanner: ScanSearch,
  camera: Camera,
  globe: Globe,
  hardDrive: HardDriveDownload,
  shield: ShieldCheck,
}