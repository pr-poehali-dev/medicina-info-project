import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [complaint, setComplaint] = useState("");

  const doctors = [
    { 
      id: 1, 
      name: "Доктор Анна Петрова", 
      specialty: "Кардиолог", 
      experience: "15 лет", 
      rating: 4.9,
      reviews: 127,
      available: true 
    },
    { 
      id: 2, 
      name: "Доктор Михаил Соколов", 
      specialty: "Терапевт", 
      experience: "12 лет", 
      rating: 4.8,
      reviews: 98,
      available: true 
    },
    { 
      id: 3, 
      name: "Доктор Елена Волкова", 
      specialty: "Педиатр", 
      experience: "18 лет", 
      rating: 5.0,
      reviews: 215,
      available: false 
    },
    { 
      id: 4, 
      name: "Доктор Сергей Морозов", 
      specialty: "Невролог", 
      experience: "20 лет", 
      rating: 4.7,
      reviews: 156,
      available: true 
    }
  ];

  const stories = [
    {
      id: 1,
      title: "Как я победил страх перед операцией",
      author: "Александр, 45 лет",
      preview: "История о том, как поддержка врачей и правильная подготовка помогли преодолеть страх...",
      category: "Хирургия",
      readTime: "5 мин"
    },
    {
      id: 2,
      title: "Жизнь после диагноза: путь к выздоровлению",
      author: "Мария, 32 года",
      preview: "Откровенный рассказ о борьбе с болезнью и возвращении к полноценной жизни...",
      category: "Онкология",
      readTime: "8 мин"
    },
    {
      id: 3,
      title: "Как найти своего врача",
      author: "Ирина, 28 лет",
      preview: "Мой опыт поиска специалиста, которому можно доверять...",
      category: "Общее",
      readTime: "4 мин"
    }
  ];

  const clinics = [
    { 
      id: 1, 
      name: "Городская поликлиника №1", 
      address: "ул. Ленина, 45", 
      type: "Государственная",
      rating: 4.2 
    },
    { 
      id: 2, 
      name: "Медицинский центр 'Здоровье'", 
      address: "пр. Мира, 12", 
      type: "Частная",
      rating: 4.8 
    },
    { 
      id: 3, 
      name: "Детская больница", 
      address: "ул. Садовая, 78", 
      type: "Государственная",
      rating: 4.5 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Heart" className="text-primary" size={32} />
              <div>
                <h1 className="text-2xl font-bold text-primary">МедПортал</h1>
                <p className="text-xs text-muted-foreground">Здоровье доступно каждому</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#doctors" className="text-sm font-medium hover:text-primary transition-colors">Врачи</a>
              <a href="#consultation" className="text-sm font-medium hover:text-primary transition-colors">Консультации</a>
              <a href="#stories" className="text-sm font-medium hover:text-primary transition-colors">Истории</a>
              <a href="#clinics" className="text-sm font-medium hover:text-primary transition-colors">Клиники</a>
            </nav>
            <Button size="sm">Войти</Button>
          </div>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl animate-fade-in">
          <Badge className="mb-4" variant="secondary">Бесплатные консультации</Badge>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Ваше здоровье — наш приоритет
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Найдите проверенных специалистов, получите онлайн-консультацию и узнайте реальные истории пациентов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="gap-2">
                  <Icon name="Calendar" size={20} />
                  Записаться на приём
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Запись на консультацию</DialogTitle>
                  <DialogDescription>
                    Заполните форму, и мы свяжемся с вами для подтверждения записи
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="patient-name">Ваше имя *</Label>
                    <Input 
                      id="patient-name" 
                      placeholder="Иван Иванов" 
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="patient-phone">Телефон *</Label>
                    <Input 
                      id="patient-phone" 
                      placeholder="+7 (999) 123-45-67" 
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="doctor">Выберите специалиста *</Label>
                    <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                      <SelectTrigger id="doctor">
                        <SelectValue placeholder="Выберите врача" />
                      </SelectTrigger>
                      <SelectContent>
                        {doctors.filter(d => d.available).map((doctor) => (
                          <SelectItem key={doctor.id} value={doctor.id.toString()}>
                            {doctor.name} — {doctor.specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Выберите дату *</Label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                      className="rounded-md border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Выберите время *</Label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">09:00</SelectItem>
                        <SelectItem value="10:00">10:00</SelectItem>
                        <SelectItem value="11:00">11:00</SelectItem>
                        <SelectItem value="12:00">12:00</SelectItem>
                        <SelectItem value="14:00">14:00</SelectItem>
                        <SelectItem value="15:00">15:00</SelectItem>
                        <SelectItem value="16:00">16:00</SelectItem>
                        <SelectItem value="17:00">17:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="complaint">Опишите жалобы</Label>
                    <Textarea 
                      id="complaint" 
                      placeholder="Расскажите о своих симптомах или причине обращения..." 
                      className="min-h-[100px]"
                      value={complaint}
                      onChange={(e) => setComplaint(e.target.value)}
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button 
                      className="flex-1" 
                      size="lg"
                      onClick={() => {
                        setIsDialogOpen(false);
                        alert('Спасибо за запись! Мы свяжемся с вами в ближайшее время.');
                      }}
                      disabled={!patientName || !patientPhone || !selectedDoctor || !selectedDate || !selectedTime}
                    >
                      Записаться
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1" 
                      size="lg"
                      onClick={() => setIsDialogOpen(false)}
                    >
                      Отмена
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Button size="lg" variant="outline" className="gap-2">
              <Icon name="MessageCircle" size={20} />
              Онлайн консультация
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <CardTitle>500+ врачей</CardTitle>
                <CardDescription>Проверенные специалисты с опытом</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Clock" className="text-primary" size={24} />
                </div>
                <CardTitle>24/7 поддержка</CardTitle>
                <CardDescription>Всегда на связи для вас</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Star" className="text-primary" size={24} />
                </div>
                <CardTitle>10 000+ отзывов</CardTitle>
                <CardDescription>Доверие тысяч пациентов</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="doctors" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-3">Наши специалисты</h3>
            <p className="text-muted-foreground">Квалифицированные врачи готовы вам помочь</p>
          </div>
          
          <div className="mb-8 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input placeholder="Поиск врача или специальности..." className="pl-10" />
            </div>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
              <TabsList>
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="available">Доступны</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white text-xl font-bold">
                        {doctor.name.split(' ')[1][0]}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{doctor.name}</CardTitle>
                        <CardDescription>{doctor.specialty}</CardDescription>
                        <p className="text-sm text-muted-foreground mt-1">Стаж: {doctor.experience}</p>
                      </div>
                    </div>
                    {doctor.available && (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Доступен
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                      <span className="font-semibold">{doctor.rating}</span>
                      <span className="text-sm text-muted-foreground">({doctor.reviews} отзывов)</span>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => {
                        setSelectedDoctor(doctor.id.toString());
                        setIsDialogOpen(true);
                      }}
                    >
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="stories" className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-3">Истории пациентов</h3>
            <p className="text-muted-foreground">Реальные истории, которые вдохновляют</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {stories.map((story) => (
              <Card key={story.id} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <Badge className="w-fit mb-2">{story.category}</Badge>
                  <CardTitle className="text-xl font-serif">{story.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-xs">
                    <Icon name="User" size={14} />
                    {story.author}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{story.preview}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {story.readTime}
                    </span>
                    <Button variant="link" className="p-0 h-auto">
                      Читать далее →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="consultation" className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Icon name="Video" size={48} className="mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Онлайн консультации</h3>
          <p className="text-lg mb-8 opacity-90">
            Получите профессиональную медицинскую консультацию не выходя из дома
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Icon name="CheckCircle" size={32} className="mb-4" />
              <h4 className="font-semibold mb-2">Быстро</h4>
              <p className="text-sm opacity-80">Запись на консультацию за 5 минут</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Icon name="Shield" size={32} className="mb-4" />
              <h4 className="font-semibold mb-2">Безопасно</h4>
              <p className="text-sm opacity-80">Защищённая передача данных</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Icon name="Wallet" size={32} className="mb-4" />
              <h4 className="font-semibold mb-2">Выгодно</h4>
              <p className="text-sm opacity-80">Первая консультация бесплатно</p>
            </div>
          </div>
          <Button 
            size="lg" 
            variant="secondary" 
            className="mt-8"
            onClick={() => setIsDialogOpen(true)}
          >
            Записаться на консультацию
          </Button>
        </div>
      </section>

      <section id="clinics" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-3">Медицинские учреждения</h3>
            <p className="text-muted-foreground">Проверенные клиники вашего города</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {clinics.map((clinic) => (
              <Card key={clinic.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Building2" className="text-primary" size={20} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight">{clinic.name}</CardTitle>
                      <Badge variant="secondary" className="mt-2 text-xs">{clinic.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm">
                      <Icon name="MapPin" className="text-muted-foreground flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-muted-foreground">{clinic.address}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                        <span className="font-semibold">{clinic.rating}</span>
                      </div>
                      <Button size="sm" variant="outline">Подробнее</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Heart" size={24} />
                <span className="font-bold text-lg">МедПортал</span>
              </div>
              <p className="text-sm text-slate-400">
                Ваш надёжный помощник в мире здоровья
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#doctors" className="hover:text-white transition-colors">Врачи</a></li>
                <li><a href="#consultation" className="hover:text-white transition-colors">Консультации</a></li>
                <li><a href="#stories" className="hover:text-white transition-colors">Истории</a></li>
                <li><a href="#clinics" className="hover:text-white transition-colors">Клиники</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Помощь</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Частые вопросы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Поддержка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  8 (800) 555-35-35
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@medportal.ru
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            © 2024 МедПортал. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;