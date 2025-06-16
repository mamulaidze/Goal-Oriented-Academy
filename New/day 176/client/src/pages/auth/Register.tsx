import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const formSchema = z.object({
  username: z.string().min(2, 'მინიმუმ 2 სიმბოლო'),
  email: z.string().email('არაა ვალიდური იმეილი'),
  password: z.string().min(6, 'მინიმუმ 6 სიმბოლო'),
});

type FormData = z.infer<typeof formSchema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.msg || 'რეგისტრაცია ვერ შესრულდა');

      alert('რეგისტრაცია წარმატებულია ✅');
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md shadow-xl p-4">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">რეგისტრაცია</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input placeholder="მომხმარებელი" {...register('username')} />
              {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
            </div>
            <div>
              <Input placeholder="ელფოსტა" type="email" {...register('email')} />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <Input placeholder="პაროლი" type="password" {...register('password')} />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? 'იტვირთება...' : 'რეგისტრაცია'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
