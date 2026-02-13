#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
HYROX DIY - SVG Exercise Illustrations Generator
Genera automaticamente SVG illustrativi per tutti gli esercizi
"""

import json
import os
from pathlib import Path

# Configurazione
STATIONS_JSON = "data/stations.json"
OUTPUT_DIR = "assets/illustrations/exercises"

# Template SVG base (minimalista, coerente con il design)
def create_svg(exercise_type, title):
    """
    Genera un SVG illustrativo basato sul tipo di esercizio
    """
    
    # Colori dal design system
    colors = {
        'ink': '#1a1a1a',
        'accent': '#2d6a4f',
        'accent2': '#52b788',
        'accent3': '#95d5b2',
        'muted': '#6b6b6b',
        'bg': '#f5f5f0'
    }
    
    # Determina il tipo di movimento dalla keyword nel titolo
    title_lower = title.lower()
    
    # SVG base (viewBox 200x200 per dettaglio migliore)
    svg_start = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <defs>
    <style>
      .primary {{ fill: {colors['accent']}; }}
      .secondary {{ fill: {colors['accent2']}; }}
      .tertiary {{ fill: {colors['accent3']}; }}
      .outline {{ fill: none; stroke: {colors['ink']}; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }}
      .equipment {{ fill: {colors['muted']}; opacity: 0.6; }}
    </style>
  </defs>
  <rect width="200" height="200" fill="{colors['bg']}"/>
'''
    
    svg_end = '</svg>'
    
    # Generazione figura in base al tipo di esercizio
    
    # PULL / TIRO (elastico, rematore, pulldown)
    if any(word in title_lower for word in ['pull', 'row', 'tira', 'rema', 'dorsal']):
        content = '''
  <!-- Persona che tira -->
  <circle cx="100" cy="50" r="12" class="primary"/>
  <line x1="100" y1="62" x2="100" y2="110" class="outline"/>
  <line x1="100" y1="75" x2="70" y2="90" class="outline"/>
  <line x1="100" y1="75" x2="130" y2="65" class="outline"/>
  <line x1="100" y1="110" x2="80" y2="140" class="outline"/>
  <line x1="100" y1="110" x2="120" y2="140" class="outline"/>
  <!-- Elastico/cavo -->
  <path d="M 130 65 Q 160 60 170 30" class="outline" stroke-dasharray="5,3"/>
  <circle cx="170" cy="30" r="6" class="secondary"/>
  <!-- Equipment marker -->
  <rect x="150" y="160" width="40" height="30" rx="5" class="equipment"/>
  <text x="170" y="180" text-anchor="middle" font-size="20" fill="{colors['ink']}">💪</text>
'''
    
    # PUSH / SPINTA (push-up, dip, press)
    elif any(word in title_lower for word in ['push', 'press', 'dip', 'pieg', 'spint']):
        content = '''
  <!-- Persona in posizione push -->
  <circle cx="100" cy="70" r="12" class="primary"/>
  <line x1="100" y1="82" x2="100" y2="120" class="outline"/>
  <line x1="100" y1="90" x2="70" y2="110" class="outline"/>
  <line x1="100" y1="90" x2="130" y2="110" class="outline"/>
  <line x1="100" y1="120" x2="80" y2="150" class="outline"/>
  <line x1="100" y1="120" x2="120" y2="150" class="outline"/>
  <!-- Frecce movimento -->
  <path d="M 70 110 L 70 125" class="secondary" stroke-width="4" stroke-linecap="round" marker-end="url(#arrow)"/>
  <path d="M 130 110 L 130 125" class="secondary" stroke-width="4" stroke-linecap="round"/>
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
      <polygon points="0,0 10,5 0,10" fill="{colors['accent2']}"/>
    </marker>
  </defs>
'''
    
    # SQUAT / LEGS (squat, lunge, affondi)
    elif any(word in title_lower for word in ['squat', 'lunge', 'affond', 'gambe', 'cosce']):
        content = '''
  <!-- Persona in squat -->
  <circle cx="100" cy="60" r="12" class="primary"/>
  <line x1="100" y1="72" x2="100" y2="105" class="outline"/>
  <line x1="100" y1="82" x2="75" y2="85" class="outline"/>
  <line x1="100" y1="82" x2="125" y2="85" class="outline"/>
  <!-- Gambe piegate -->
  <line x1="100" y1="105" x2="85" y2="130" class="outline"/>
  <line x1="85" y1="130" x2="80" y2="155" class="outline"/>
  <line x1="100" y1="105" x2="115" y2="130" class="outline"/>
  <line x1="115" y1="130" x2="120" y2="155" class="outline"/>
  <!-- Peso/carico -->
  <rect x="70" y="75" width="10" height="20" rx="3" class="secondary"/>
  <rect x="120" y="75" width="10" height="20" rx="3" class="secondary"/>
  <circle cx="100" cy="155" r="8" class="tertiary"/>
'''
    
    # JUMP / SALTO (burpee, box jump)
    elif any(word in title_lower for word in ['jump', 'burpee', 'salt', 'broad']):
        content = '''
  <!-- Persona che salta -->
  <circle cx="100" cy="45" r="12" class="primary"/>
  <line x1="100" y1="57" x2="100" y2="90" class="outline"/>
  <line x1="100" y1="65" x2="80" y2="55" class="outline"/>
  <line x1="100" y1="65" x2="120" y2="55" class="outline"/>
  <line x1="100" y1="90" x2="90" y2="110" class="outline"/>
  <line x1="100" y1="90" x2="110" y2="110" class="outline"/>
  <!-- Movimento verso l'alto -->
  <path d="M 100 120 L 100 140" class="secondary" stroke-width="5" stroke-linecap="round" opacity="0.5"/>
  <path d="M 90 135 L 100 120 L 110 135" fill="{colors['accent2']}" opacity="0.7"/>
  <!-- Base/pavimento -->
  <line x1="60" y1="160" x2="140" y2="160" class="equipment" stroke-width="4"/>
'''
    
    # CARRY / TRASPORTO
    elif any(word in title_lower for word in ['carry', 'farmer', 'porta', 'trasp']):
        content = '''
  <!-- Persona che cammina con pesi -->
  <circle cx="100" cy="55" r="12" class="primary"/>
  <line x1="100" y1="67" x2="100" y2="110" class="outline"/>
  <line x1="100" y1="77" x2="75" y2="95" class="outline"/>
  <line x1="100" y1="77" x2="125" y2="95" class="outline"/>
  <line x1="100" y1="110" x2="85" y2="145" class="outline"/>
  <line x1="100" y1="110" x2="115" y2="145" class="outline"/>
  <!-- Pesi nelle mani -->
  <rect x="65" y="90" width="15" height="25" rx="3" class="secondary"/>
  <rect x="120" y="90" width="15" height="25" rx="3" class="secondary"/>
  <!-- Traccia di movimento -->
  <path d="M 140 160 L 160 160" class="tertiary" stroke-width="3" stroke-dasharray="5,5"/>
'''
    
    # CARDIO / CORSA (sled push/pull, running)
    elif any(word in title_lower for word in ['sled', 'run', 'sprint', 'corsa', 'spinta', 'traino']):
        content = '''
  <!-- Persona in movimento -->
  <circle cx="90" cy="60" r="12" class="primary"/>
  <line x1="90" y1="72" x2="95" y2="110" class="outline"/>
  <line x1="90" y1="80" x2="65" y2="85" class="outline"/>
  <line x1="90" y1="80" x2="115" y2="75" class="outline"/>
  <line x1="95" y1="110" x2="75" y2="145" class="outline"/>
  <line x1="95" y1="110" x2="110" y2="140" class="outline"/>
  <!-- Sled/attrezzo -->
  <rect x="120" y="95" width="50" height="35" rx="5" class="equipment"/>
  <circle cx="130" cy="135" r="8" class="muted"/>
  <circle cx="160" cy="135" r="8" class="muted"/>
  <!-- Linee di velocità -->
  <line x1="30" y1="70" x2="50" y2="70" class="tertiary" stroke-width="3"/>
  <line x1="35" y1="85" x2="55" y2="85" class="tertiary" stroke-width="3"/>
'''
    
    # CORE / ADDOMINALI
    elif any(word in title_lower for word in ['plank', 'crunch', 'hollow', 'core', 'addomi']):
        content = '''
  <!-- Persona in plank/core -->
  <circle cx="100" cy="80" r="12" class="primary"/>
  <line x1="100" y1="92" x2="100" y2="115" class="outline"/>
  <line x1="100" y1="100" x2="70" y2="110" class="outline"/>
  <line x1="100" y1="100" x2="130" y2="110" class="outline"/>
  <line x1="100" y1="115" x2="80" y2="125" class="outline"/>
  <line x1="100" y1="115" x2="120" y2="125" class="outline"/>
  <!-- Base stabile -->
  <line x1="60" y1="130" x2="140" y2="130" class="equipment" stroke-width="3"/>
  <!-- Focus sul core -->
  <circle cx="100" cy="105" r="18" fill="none" stroke="{colors['accent2']}" stroke-width="2" stroke-dasharray="3,3"/>
'''
    
    # DEFAULT / GENERICO
    else:
        content = '''
  <!-- Figura generica -->
  <circle cx="100" cy="60" r="14" class="primary"/>
  <line x1="100" y1="74" x2="100" y2="120" class="outline"/>
  <line x1="100" y1="85" x2="75" y2="100" class="outline"/>
  <line x1="100" y1="85" x2="125" y2="100" class="outline"/>
  <line x1="100" y1="120" x2="80" y2="155" class="outline"/>
  <line x1="100" y1="120" x2="120" y2="155" class="outline"/>
  <!-- Badge attrezzo -->
  <circle cx="150" cy="150" r="20" class="secondary"/>
  <text x="150" y="157" text-anchor="middle" font-size="24" fill="white">🏋️</text>
'''
    
    return svg_start + content + svg_end


def main():
    """
    Legge stations.json e genera tutti gli SVG
    """
    
    print("🎨 HYROX DIY - Generatore SVG Esercizi\n")
    
    # Verifica che esista stations.json
    if not os.path.exists(STATIONS_JSON):
        print(f"❌ Errore: {STATIONS_JSON} non trovato!")
        print(f"   Assicurati di lanciare lo script dalla root del progetto.")
        return
    
    # Crea cartella output se non esiste
    Path(OUTPUT_DIR).mkdir(parents=True, exist_ok=True)
    print(f"📁 Cartella output: {OUTPUT_DIR}/")
    
    # Carica JSON
    with open(STATIONS_JSON, 'r', encoding='utf-8') as f:
        stations = json.load(f)
    
    total_svg = 0
    
    # Itera su tutte le stazioni
    for station in stations:
        station_id = station.get('id', 'unknown')
        station_name = station.get('name', 'Unnamed')
        levels = station.get('levels', {})
        
        print(f"\n🏋️  {station_name} ({station_id})")
        
        # Itera sui livelli (1, 2, 3)
        for level_num in ['1', '2', '3']:
            exercises = levels.get(level_num, [])
            
            if not exercises:
                print(f"   ⚠️  Livello {level_num}: nessun esercizio trovato")
                continue
            
            print(f"   📝 Livello {level_num}: {len(exercises)} esercizi")
            
            # Genera SVG per ogni esercizio
            for idx, exercise in enumerate(exercises, 1):
                title = exercise.get('title', 'Esercizio')
                
                # Nome file: stationid_level_index.svg
                filename = f"{station_id}_l{level_num}_ex{idx}.svg"
                filepath = os.path.join(OUTPUT_DIR, filename)
                
                # Genera SVG
                svg_content = create_svg(station_id, title)
                
                # Salva file
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(svg_content)
                
                total_svg += 1
                print(f"      ✅ {filename}")
    
    print(f"\n🎉 Completato! {total_svg} file SVG generati in {OUTPUT_DIR}/")
    print(f"\n💡 Prossimo step:")
    print(f"   Aggiungi nei tuoi esercizi (stations.json):")
    print(f'   "img": "/assets/illustrations/exercises/NOME_FILE.svg"')
    print(f'   "alt": "Descrizione dell\'esercizio"')


if __name__ == "__main__":
    main()

