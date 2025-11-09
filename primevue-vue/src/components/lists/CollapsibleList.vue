<template>
  <div class="card">
    <h3>Collapsible list (PrimeVue)</h3>
    <Accordion>
      <AccordionTab header="Account">
        <ul class="m-0 pl-3">
          <li>Profile</li>
          <li>Security</li>
          <li>Notifications</li>
        </ul>
      </AccordionTab>
      <AccordionTab header="System">
        <ul class="m-0 pl-3">
          <li>Display</li>
          <li>Storage</li>
        </ul>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<script setup>
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
</script>
