"use client";

import { Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-100 text-zinc-600 border-t border-zinc-200 text-xs">
      
      {/* Top Disclaimer Block (Xbox Style) */}
      <div className="bg-black text-zinc-500 py-8 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2 text-[11px] leading-relaxed">
          <p>
            * Указанные сроки производства и доставки являются предварительными и могут корректироваться в зависимости от загрузки типографии.
            Все участники кампании предзаказа гарантированно получают эксклюзивный промо-набор карт «Стартапы» в составе коробки.
          </p>
          <p>
            Правила и компоненты игры защищены авторским правом. Все названия городов и достопримечательностей использованы в культурно-познавательных целях.
          </p>
        </div>
      </div>

      {/* Main Light Footer Grid (Xbox style) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Column 1 */}
          <div className="space-y-3">
            <div className="font-bold text-zinc-950 uppercase tracking-wider text-xs">
              Игра
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-[#107c10] transition-colors">
                  Об игре и лоре
                </a>
              </li>
              <li>
                <a href="#components" className="hover:text-[#107c10] transition-colors">
                  Компоненты (280+ шт)
                </a>
              </li>
              <li>
                <a href="#cards" className="hover:text-[#107c10] transition-colors">
                  Колода инноваций
                </a>
              </li>
              <li>
                <a href="#rules" className="hover:text-[#107c10] transition-colors">
                  Книга правил PDF
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <div className="font-bold text-zinc-950 uppercase tracking-wider text-xs">
              Предзаказ
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#editions" className="hover:text-[#107c10] transition-colors">
                  Стандартное издание
                </a>
              </li>
              <li>
                <a href="#editions" className="hover:text-[#107c10] transition-colors">
                  Deluxe с металлом
                </a>
              </li>
              <li>
                <a href="#editions" className="hover:text-[#107c10] transition-colors">
                  All-In Коллекционный
                </a>
              </li>
              <li>
                <a href="#editions" className="hover:text-[#107c10] transition-colors">
                  Аксессуары и плейматы
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-3">
            <div className="font-bold text-zinc-950 uppercase tracking-wider text-xs">
              Инструменты
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#calculator" className="hover:text-[#107c10] transition-colors">
                  Калькулятор ПО за столом
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#107c10] transition-colors">
                  Частые вопросы (FAQ)
                </a>
              </li>
              <li>
                <a href="#rules" className="hover:text-[#107c10] transition-colors">
                  Советы новичкам
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#107c10] transition-colors">
                  Соло-режим «Автома»
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-3">
            <div className="font-bold text-zinc-950 uppercase tracking-wider text-xs">
              Сообщество
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#107c10] transition-colors"
                >
                  Telegram-чат игроков
                </a>
              </li>
              <li>
                <a
                  href="https://vk.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#107c10] transition-colors"
                >
                  Сообщество ВКонтакте
                </a>
              </li>
              <li>
                <a
                  href="https://boardgamegeek.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#107c10] transition-colors"
                >
                  Страница на BGG
                </a>
              </li>
              <li>
                <a
                  href="https://tesera.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#107c10] transition-colors"
                >
                  Карточка на Тесере
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="space-y-3">
            <div className="font-bold text-zinc-950 uppercase tracking-wider text-xs">
              Контакты
            </div>
            <ul className="space-y-2 text-zinc-500">
              <li>Издательство «Mobility Era»</li>
              <li>support@mobilityera.ru</li>
              <li>Москва, Россия</li>
              <li>Доставка по всей РФ и СНГ</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Language & Legal */}
        <div className="pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-zinc-600" />
            <span className="font-medium text-zinc-700">Русский (Россия)</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[11px]">
            <span>© {new Date().getFullYear()} Mobility Era Board Game. Все права защищены.</span>
            <a href="#" className="hover:text-[#107c10]">Политика конфиденциальности</a>
            <a href="#" className="hover:text-[#107c10]">Условия предзаказа</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
