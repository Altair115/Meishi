import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useActiveSection(sectionIds: string[]) {
    const activeSection = ref<string | null>(null);
    let observer: IntersectionObserver;

    onMounted(() => {
        const options = {
            root: null,
            rootMargin: '0px 0px -60% 0px', // triggers when top of section hits ~40% viewport
            threshold: 0,
        };

        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activeSection.value = entry.target.id;
                }
            });
        }, options);

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
    });

    onBeforeUnmount(() => {
        if (observer) observer.disconnect();
    });

    return { activeSection };
}