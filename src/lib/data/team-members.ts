import type { TeamMember, PlaceholderImage } from '../types';
import placeholderData from '../placeholder-images/team-members.json';

export const placeholderImages: PlaceholderImage[] = placeholderData.teamMembersImages;

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Shuaib Abbasi',
    role: 'Founder & CEO',
    bio: 'Leading Trionex with vision and passion, Shuaib drives innovation, strategy, and digital excellence.',
    avatarId: 'avatar-1'
  },
  {
    id: '2',
    name: 'Vishal Raj',
    role: 'Lead Software Engineer',
    bio: 'Builds powerful, high-performing digital solutions with precision and creativity.',
    avatarId: 'avatar-2'
  },
  {
    id: '3',
    name: 'Sahil Khan',
    role: 'Sales & Marketing Expert',
    bio: 'Connects brands with opportunities through impactful strategies and client relationships.',
    avatarId: 'avatar-3'
  },
  {
    id: '4',
    name: 'Sumit Sharma',
    role: 'Finance & Accounts Manager',
    bio: 'Ensures smooth financial operations and strategic planning that fuel sustainable growth.',
    avatarId: 'avatar-4'
  }
];