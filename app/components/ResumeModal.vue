<script setup lang="ts">
const { $featherReplace } = useNuxtApp()

const experience = [
  {
    company: 'Artfabric',
    role: 'Fullstack / Senior Developer',
    period: 'Сентябрь 2024 — настоящее время',
    duration: '1 г. 6 мес.',
    achievements: [
      'Разработал и внедрил 15+ интеграций с внешними системами: платёжные шлюзы, CRM',
      'Спроектировал архитектуру Telegram-ботов на Node.js для обработки заказов и уведомлений',
      'Рефакторинг legacy-кода: производительность приложения выросла на 25%',
      'Полный цикл поддержки клиентской и серверной части высоконагруженного проекта',
    ],
    tech: ['Vue 3', 'Pinia', 'Laravel', 'Node.js', 'Inertia.js', 'MySQL', 'Telegram Bot API', 'Git'],
  },
  {
    company: "ООО «Залог чистоты» — Mop'up",
    role: 'Fullstack-разработчик',
    period: 'Апрель 2022 — настоящее время',
    duration: '3 г. 11 мес.',
    achievements: [
      'Разработал с нуля клиентский сайт, административную панель и REST API',
      'Создал и запустил 4 мобильных приложения Flutter/Dart для iOS и Android',
      'Реализовал Telegram Mini App с формой заказа клининговых услуг',
      'Интегрировал интернет-эквайринг, push-уведомления (Firebase, OneSignal) и карты',
    ],
    tech: ['Laravel', 'Vue.js', 'Flutter', 'Dart', 'MySQL', 'Firebase', 'OneSignal', 'Docker'],
  },
  {
    company: 'Freelance / ИП',
    role: 'Fullstack-разработчик',
    period: 'Август 2017 — настоящее время',
    duration: '8+ лет',
    achievements: [
      'Разработка продуктов под ключ: веб-сервисы, мобильные приложения, Telegram-боты',
      'Интеграция AI-моделей (OpenAI, OpenRouter) в бизнес-процессы клиентов',
      'Интеграции со сторонними сервисами: МойСклад, amoCRM, ЮКасса, Тинькофф',
      'Настройка CI/CD, Docker, деплой и техническая поддержка проектов',
    ],
    tech: ['Laravel', 'Vue 3', 'Nuxt', 'Flutter', 'Node.js', 'Python', 'FastAPI', 'Docker'],
  },
]

const skillGroups = [
  { label: 'Frontend', skills: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Inertia.js', 'Tailwind', 'HTML5', 'CSS3', 'Sass'] },
  { label: 'Backend', skills: ['PHP', 'Laravel', 'Node.js', 'Express', 'NestJS', 'Python', 'FastAPI', 'Go'] },
  { label: 'Mobile', skills: ['Flutter', 'Dart', 'iOS', 'Android', 'Firebase', 'OneSignal'] },
  { label: 'Базы данных', skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase'] },
  { label: 'AI & Интеграции', skills: ['OpenAI API', 'OpenRouter', 'REST API', 'amoCRM', 'МойСклад', 'ЮКасса'] },
  { label: 'Инструменты', skills: ['Git', 'Docker', 'CI/CD', 'Vite', 'Webpack', 'Linux'] },
]

const education = [
  { year: '2025', org: 'НИУ ИТМО, Санкт-Петербург', spec: 'Программная инженерия' },
  { year: '2022', org: 'ООО Инфоурок', spec: 'Информационные технологии в профессиональной деятельности' },
  { year: '2021', org: 'СПБ ГУГА', spec: 'Техническая эксплуатация' },
]

onMounted(() => $featherReplace())
</script>

<template>
  <div
    id="resume-modal"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable" role="document">
      <div class="modal-content resume-modal-content">

        <div class="modal-header resume-modal-header">
          <button
            type="button"
            class="close resume-close-btn"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i data-feather="x"></i>
          </button>
        </div>

        <div class="modal-body resume-modal-body">

          <!-- Hero -->
          <div class="resume-hero">
            <div class="resume-hero-icon">
              <i data-feather="user"></i>
            </div>
            <div class="resume-hero-info">
              <h2 class="resume-name">Андрей Любиченко</h2>
              <p class="resume-title">Fullstack-разработчик · Основатель Coderok</p>
              <div class="resume-contacts">
                <a href="mailto:info@coderok.ru" class="resume-contact-item">
                  <i data-feather="mail"></i>
                  <span>info@coderok.ru</span>
                </a>
                <a href="tel:+79992213383" class="resume-contact-item">
                  <i data-feather="phone"></i>
                  <span>+7 (999) 221-33-83</span>
                </a>
                <span class="resume-contact-item">
                  <i data-feather="map-pin"></i>
                  <span>Санкт-Петербург</span>
                </span>
              </div>
            </div>
          </div>

          <div class="resume-divider"></div>

          <!-- Experience -->
          <section class="resume-section">
            <h3 class="resume-section-title">
              <i data-feather="briefcase"></i>
              Опыт работы
              <span class="resume-section-badge">8 лет 7 месяцев</span>
            </h3>
            <div class="resume-timeline">
              <div
                v-for="job in experience"
                :key="job.company"
                class="resume-timeline-item"
              >
                <div class="resume-timeline-dot"></div>
                <div class="resume-timeline-content">
                  <div class="resume-job-header">
                    <div>
                      <h4 class="resume-job-company">{{ job.company }}</h4>
                      <p class="resume-job-role">{{ job.role }}</p>
                    </div>
                    <div class="resume-job-meta">
                      <span class="resume-job-duration">{{ job.duration }}</span>
                      <span class="resume-job-period">{{ job.period }}</span>
                    </div>
                  </div>
                  <ul class="resume-achievements">
                    <li v-for="item in job.achievements" :key="item">{{ item }}</li>
                  </ul>
                  <div class="resume-tech-row">
                    <span v-for="t in job.tech" :key="t" class="resume-tech-tag">{{ t }}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div class="resume-divider"></div>

          <!-- Skills -->
          <section class="resume-section">
            <h3 class="resume-section-title">
              <i data-feather="cpu"></i>
              Стек технологий
            </h3>
            <div class="resume-skills">
              <div
                v-for="group in skillGroups"
                :key="group.label"
                class="resume-skill-group"
              >
                <span class="resume-skill-label">{{ group.label }}</span>
                <div class="resume-skill-tags">
                  <span
                    v-for="skill in group.skills"
                    :key="skill"
                    class="resume-skill-tag"
                  >{{ skill }}</span>
                </div>
              </div>
            </div>
          </section>

          <div class="resume-divider"></div>

          <!-- Education -->
          <section class="resume-section">
            <h3 class="resume-section-title">
              <i data-feather="book-open"></i>
              Образование
            </h3>
            <div class="resume-education">
              <div
                v-for="edu in education"
                :key="edu.org"
                class="resume-edu-item"
              >
                <span class="resume-edu-year">{{ edu.year }}</span>
                <div>
                  <p class="resume-edu-org">{{ edu.org }}</p>
                  <p class="resume-edu-spec">{{ edu.spec }}</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Download -->
          <div class="resume-footer">
            <a
              href="/assets/images/contact/Любиченко Андрей.pdf"
              target="_blank"
              class="rn-btn"
            >
              <i data-feather="download"></i>
              <span>СКАЧАТЬ PDF</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Modal shell */
.resume-modal-content {
  background: #1a1c20;
  border: 1px solid rgba(166, 86, 255, 0.15);
  border-radius: 12px;
  color: #ccc;
}

.resume-modal-header {
  border-bottom: none;
  padding: 1rem 1.25rem 0;
  justify-content: flex-end;
}

.resume-close-btn {
  background: none;
  border: none;
  color: #aaa;
  cursor: pointer;
  padding: 0.25rem;
  transition: color 0.2s;
  display: flex;
  align-items: center;
}
.resume-close-btn:hover { color: var(--color-primary); }

.resume-modal-body {
  padding: 1.5rem 2.5rem 2.5rem;
}

/* Hero */
.resume-hero {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.resume-hero-icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(166, 86, 255, 0.1);
  border: 2px solid rgba(166, 86, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.resume-hero-icon :deep(svg) {
  width: 32px;
  height: 32px;
  color: var(--color-primary);
}

.resume-name {
  font-size: 1.9rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.25rem;
}

.resume-title {
  font-size: 0.9rem;
  color: var(--color-primary);
  margin: 0 0 0.75rem;
  font-weight: 500;
}

.resume-contacts {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
}

.resume-contact-item {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.82rem;
  color: #aaa;
  text-decoration: none;
  transition: color 0.2s;
}
.resume-contact-item:hover { color: var(--color-primary); }
.resume-contact-item :deep(svg) { width: 13px; height: 13px; }

/* Divider */
.resume-divider {
  height: 1px;
  background: rgba(166, 86, 255, 0.12);
  margin: 1.75rem 0;
}

/* Section */
.resume-section { margin-bottom: 0; }

.resume-section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
}
.resume-section-title :deep(svg) { width: 14px; height: 14px; }

.resume-section-badge {
  font-size: 0.65rem;
  background: rgba(166, 86, 255, 0.12);
  border: 1px solid rgba(166, 86, 255, 0.25);
  border-radius: 20px;
  padding: 0.1rem 0.6rem;
  color: var(--color-primary);
  letter-spacing: 0;
}

/* Timeline */
.resume-timeline {
  position: relative;
  padding-left: 1.5rem;
}
.resume-timeline::before {
  content: '';
  position: absolute;
  left: 5px;
  top: 10px;
  bottom: 10px;
  width: 1px;
  background: rgba(166, 86, 255, 0.2);
}

.resume-timeline-item {
  position: relative;
  margin-bottom: 2rem;
}
.resume-timeline-item:last-child { margin-bottom: 0; }

.resume-timeline-dot {
  position: absolute;
  left: -1.5rem;
  top: 6px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--color-primary);
  border: 2px solid #1a1c20;
  box-shadow: 0 0 0 2px rgba(166, 86, 255, 0.3);
}

.resume-timeline-content { padding-left: 0.5rem; }

.resume-job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
}

.resume-job-company {
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 0.15rem;
}

.resume-job-role {
  font-size: 0.85rem;
  color: var(--color-primary);
  margin: 0;
}

.resume-job-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-shrink: 0;
}

.resume-job-duration {
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
}

.resume-job-period {
  font-size: 0.73rem;
  color: #888;
  margin-top: 0.1rem;
}

.resume-achievements {
  list-style: none;
  padding: 0;
  margin: 0 0 0.75rem;
}
.resume-achievements li {
  font-size: 0.83rem;
  color: #bbb;
  padding: 0.2rem 0 0.2rem 1rem;
  position: relative;
  line-height: 1.5;
}
.resume-achievements li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: rgba(166, 86, 255, 0.6);
  font-size: 0.75rem;
}

.resume-tech-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.resume-tech-tag {
  font-size: 0.7rem;
  color: #999;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 4px;
  padding: 0.1rem 0.5rem;
}

/* Skills */
.resume-skills {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.resume-skill-group {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.resume-skill-label {
  font-size: 0.72rem;
  font-weight: 600;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  width: 100px;
  flex-shrink: 0;
  padding-top: 0.15rem;
}

.resume-skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.resume-skill-tag {
  font-size: 0.78rem;
  color: var(--color-primary);
  border: 1px solid rgba(166, 86, 255, 0.3);
  border-radius: 4px;
  padding: 0.15rem 0.55rem;
  background: rgba(166, 86, 255, 0.05);
}

/* Education */
.resume-education {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.resume-edu-item {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.resume-edu-year {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-primary);
  width: 36px;
  flex-shrink: 0;
  padding-top: 0.1rem;
}

.resume-edu-org {
  font-size: 0.85rem;
  font-weight: 600;
  color: #ddd;
  margin: 0 0 0.1rem;
}

.resume-edu-spec {
  font-size: 0.78rem;
  color: #888;
  margin: 0;
}

/* Footer */
.resume-footer {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  padding-top: 1.75rem;
  border-top: 1px solid rgba(166, 86, 255, 0.12);
}

.resume-footer .rn-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.resume-footer .rn-btn :deep(svg) {
  width: 15px;
  height: 15px;
}

/* White version overrides */
:global(.white-version) .resume-modal-content {
  background: #fff;
  border-color: rgba(166, 86, 255, 0.2);
  color: #444;
}
:global(.white-version) .resume-name { color: #1e2125; }
:global(.white-version) .resume-job-company { color: #1e2125; }
:global(.white-version) .resume-job-duration { color: #1e2125; }
:global(.white-version) .resume-achievements li { color: #555; }
:global(.white-version) .resume-tech-tag {
  background: rgba(0,0,0,0.03);
  border-color: rgba(0,0,0,0.1);
  color: #666;
}
:global(.white-version) .resume-timeline-dot { border-color: #fff; }
:global(.white-version) .resume-edu-org { color: #1e2125; }
:global(.white-version) .resume-close-btn { color: #555; }

/* Responsive */
@media (max-width: 768px) {
  .resume-modal-body { padding: 1.25rem 1.25rem 2rem; }
  .resume-hero { flex-direction: column; gap: 1rem; }
  .resume-job-header { flex-direction: column; }
  .resume-job-meta { align-items: flex-start; }
  .resume-skill-group { flex-direction: column; gap: 0.35rem; }
  .resume-skill-label { width: auto; }
}
</style>
